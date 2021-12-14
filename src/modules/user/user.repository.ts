import { Entity, EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(name: string): Promise<string> {
    const user = this.create();
    user.username = name;
    user.salt = 'salt';
    user.password = 'xxkdkdk';
    user.save();
    return name;
  }
}
