import { Module } from '@nestjs/common';
import { Topic } from 'src/models/topic.entity';
import { Connection } from 'typeorm';
import { TopicController } from './topic.controller';

@Module({
  controllers: [TopicController],
  providers: [
    {
      provide: 'topic_repository',
      useFactory: async (connection: Connection) => {
        const s = connection.getRepository(Topic);
        // console.log(await s.findOne());
        return s;
      },
      inject: [Connection],
    },
  ],
})
export class TopicModule {}
