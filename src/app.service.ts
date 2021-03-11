import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  // constructor(private readonly connection: Connection) {}
  // async getHello() {
  //   const photo = new Photo();
  //   photo.name = 'Me and Bears';
  //   photo.description = 'I am near polar bears';
  //   photo.filename = 'photo-with-bears.jpg';
  //   photo.views = 1;
  //   photo.isPublished = true;
  //   await this.connection.manager.save(photo);
  //   return 'Hello World!';
  // }
}
