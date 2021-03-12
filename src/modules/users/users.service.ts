import { Injectable } from "@nestjs/common";
import { User } from "src/models/user.entity";
import { Role } from "../auth/enums/role.enum";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      user_id: 1,
      username: "john",
      password: "changeme",
      roles: [Role.Admin],
    },
    {
      user_id: 2,
      username: "maria",
      password: "guess",
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
