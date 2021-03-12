import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/models/user.entity";
import { Repository } from "typeorm";
import { Role } from "../auth/enums/role.enum";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async createUser(createdUser: User) {
    const user = this.userRepository.create(createdUser);
    return await this.userRepository.save(user);
  }

  async findAllUsers() {
    return await this.userRepository.find();
  }

  async findUserByUsername(username: string) {
    return await this.userRepository.find({ where: { username } });
  }
}
