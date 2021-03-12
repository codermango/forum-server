import { HttpCode, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { UserLoginDto } from "./dtos/user-login.dto";
import { UserSignupDto } from "./dtos/user-signup.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(user: UserSignupDto) {
    const userData = await this.usersService.findUserByUsername(user.username);
    if (userData) {
      return { statusCode: HttpStatus.FORBIDDEN, message: "This username aleady exists" };
    }

    const createdUser = await this.usersService.createUser(user);
    const createdUserData = await this.usersService.findUserByUsername(createdUser.username);
    return {
      username: createdUserData.username,
      statusCode: HttpStatus.CREATED,
    };
  }

  async login(user: UserLoginDto) {
    const userData = await this.usersService.findUserByUsername(user.username);
    if (!userData) {
      return { statusCode: HttpStatus.UNAUTHORIZED, message: "This username doesn't exist!" };
    }

    try {
      const isMatch = await bcrypt.compare(user.password, userData.password);
      if (!isMatch) {
        return { statusCode: HttpStatus.UNAUTHORIZED, message: "Password is wrong!" };
      } else {
        return { statusCode: HttpStatus.FOUND, username: userData.username };
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const userData = await this.usersService.findUserByUsername(username);
    const passwordMatch = await bcrypt.compare(password, userData.password);
    if (userData && passwordMatch) {
      const { password, ...result } = userData;
      return result;
    }
    return null;
  }
}
