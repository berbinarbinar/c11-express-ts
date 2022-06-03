import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', nullable: true, unique: true })
  userName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
