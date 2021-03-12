import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Topic } from "src/models/topic.entity";
import { Connection } from "typeorm";
import { TopicController } from "./topic.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Topic])],
  controllers: [TopicController],
})
export class TopicModule {}
