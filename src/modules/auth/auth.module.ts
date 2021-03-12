import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "../users/users.module";
import { UsersService } from "../users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { RolesGuard } from "./guards/roles.guard";
import { SessionSerializer } from "../../session.serializer";

@Module({
  providers: [AuthService, LocalStrategy, SessionSerializer],
  imports: [
    UsersModule,
    // PassportModule,
    // JwtModule.register({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: "60000s" },
    // }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
