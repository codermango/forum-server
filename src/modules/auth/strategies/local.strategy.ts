import { Strategy } from "passport-local";
import { PassportStrategy, PassportSerializer } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const userData = await this.authService.validateUser(username, password);
    if (!userData) {
      throw new UnauthorizedException();
    }
    return userData;
  }
}
