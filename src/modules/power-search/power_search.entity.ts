import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class powerSearch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  keyword: string;

  @Column('text')
  description: string;

  @Column('int')
  views: number;
}
