import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
import { AppModule } from "./app.module";
import * as passport from "passport";
import * as MySQLStore from "express-mysql-session";

const MysqlSessionStore = MySQLStore(session);

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
      store: new MysqlSessionStore({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "forum",
      }),
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(4000);
}
bootstrap();
