import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base {
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
