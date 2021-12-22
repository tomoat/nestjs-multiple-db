import {
  Entity,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'User', schema: 'auth' })
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  realname: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @UpdateDateColumn()
  updatedDate: Date;

  // @ManyToMany(
  //   type => UserGroup,
  //   usergroup => usergroup.users,
  // )
  // usergroups: UserGroup[];
}
