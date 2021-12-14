import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository], 'UserConnection'),
  ],
  providers: [
    // ...userProviders,
    UserService,
  ],
  exports: [TypeOrmModule],
  controllers: [UserController],
})
export class UserModule {}
