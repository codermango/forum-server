import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
import { AppModule } from "./app.module";
import * as passport from "passport";
import * as MySQLStore from "express-mysql-session";
import { ConfigService } from "@nestjs/config";

const MysqlSessionStore = MySQLStore(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(
    session({
      secret: configService.get("SESSION_SECRET"),
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: Number(configService.get("SESSION_MAX_AGE")),
      },
      store: new MysqlSessionStore({
        host: configService.get("DATABASE_HOST"),
        port: configService.get("DATABASE_PORT"),
        user: configService.get("DATABASE_USER"),
        password: configService.get("DATABASE_PASSWORD"),
        database: configService.get("DATABASE_NAME"),
      }),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(4000);
}
bootstrap();
