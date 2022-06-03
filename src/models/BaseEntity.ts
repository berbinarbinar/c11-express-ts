import { BaseEntity as TOBaseEntity, PrimaryGeneratedColumn } from 'typeorm'

export class BaseEntity extends TOBaseEntity {
  @PrimaryGeneratedColumn()
  id: number
}
