import { Role } from "src/modules/auth/enums/role.enum";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { Base } from "./base";

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  avatar_url?: string;

  @Column({ default: false })
  is_block: boolean;

  @Column({ default: false })
  active: boolean;

  @Column({ nullable: true })
  access_token: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
