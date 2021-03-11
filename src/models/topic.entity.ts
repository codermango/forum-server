import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author_id: string;

  @Column({ default: false })
  top: boolean;

  @Column({ default: false })
  good: boolean;

  @Column({ default: false })
  lock: boolean;

  @Column({ default: 0 })
  reply_count: number;

  @Column({ default: 0 })
  visit_count: number;

  @Column({ default: false })
  deleted: boolean;

  @Column()
  country_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
