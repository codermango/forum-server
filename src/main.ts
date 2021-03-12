import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
import { AppModule } from "./app.module";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: "forum-session-screte",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 10000,
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(4000);
}
bootstrap();
