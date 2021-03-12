import { Role } from "src/modules/auth/enums/role.enum";
import { Column } from "typeorm";

export class User {
  @Column()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  roles: Role[];
}
