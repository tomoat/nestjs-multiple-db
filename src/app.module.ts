import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './db/photo/photo.module';
import { UserModule } from './db/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './db/photo/photo.entity';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { PhotoRepository } from './db/photo/photo.repository';
import { User } from './db/user/user.entity';
import { UserRepository } from './db/user/user.repository';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const defaultOptions = {
  type: 'sqlite',
  synchronize: true,
  
};
@Module({
  imports: [

    TypeOrmModule.forRootAsync({
      name: 'PhotoConnection',
      useFactory: async () => {
        return {
          type: 'sqlite',
          synchronize: true,
          database: 'TestPhoto.sqlite',
          entities: [Photo],
        } as SqliteConnectionOptions;
      },
    }),
    TypeOrmModule.forRootAsync({
      name: 'UserConnection',
      useFactory: async () => {
        return {
          type: 'sqlite',
          synchronize: true,
          database: 'TestUser.sqlite',
          entities: [User],
        } as SqliteConnectionOptions;
      },
    }),
    TypeOrmModule.forFeature([User, UserRepository], 'UserConnection'),
    TypeOrmModule.forFeature([Photo, PhotoRepository], 'PhotoConnection'),
    PhotoModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
