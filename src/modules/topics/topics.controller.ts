import { Controller, Get, Inject, Post, Request, Session, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/models/topic.entity";
import { Repository } from "typeorm";
import { AuthenticatedGuard } from "../auth/guards/authenticated.guard";
import { LocalAuthGuard } from "../auth/guards/local-auth.guard";

@Controller("topics")
export class TopicController {
  constructor(@InjectRepository(Topic) private readonly topicRepository: Repository<Topic>) {}

  @Get()
  getTopics() {
    return this.topicRepository.find();
  }

  @UseGuards(AuthenticatedGuard)
  @Post()
  createTopic() {
    const topic = new Topic();
    topic.author_id = "aaa";
    topic.content = "hiafhiefiafjiejfiajfiaefjiefjaief";
    topic.country_id = "se";
    topic.title = "test";
    this.topicRepository.insert(topic);
  }
}
