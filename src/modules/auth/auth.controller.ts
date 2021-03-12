import { Body, Controller, Get, Post, Request, UseGuards, Session, HttpStatus } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { Roles } from "./decorators/roles.decorator";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Role } from "./enums/role.enum";
import { RolesGuard } from "./guards/roles.guard";
import { UsersService } from "../users/users.service";
import { UserSignupDto } from "./dtos/user-signup.dto";
import { UserLoginDto } from "./dtos/user-login.dto";
import { LoginGuard } from "./guards/login.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService, private readonly usersService: UsersService) {}

  @Post("signup")
  async signup(@Body() user: UserSignupDto) {
    return await this.authService.signup(user);
  }

  @UseGuards(LoginGuard)
  @Post("login")
  async login(@Request() req) {
    return req.user;
  }
}
