import { Column, Entity, CreateDateColumn } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'bigint' })
  price: number;

  @Column()
  stock: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
