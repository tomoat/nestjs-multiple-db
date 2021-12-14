import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './modules/photo/photo.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './modules/photo/photo.entity';
// import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import {  PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PhotoRepository } from './modules/photo/photo.repository';
import { User } from './modules/user/user.entity';
import { UserRepository } from './modules/user/user.repository';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const defaultOptions = {
  type: 'sqlite',
  synchronize: true,
  
};
@Module({
  imports: [
    // ConfigModule.forRoot({ envFilePath: '.env' }),
    // TypeOrmModule.forRootAsync({
    //     imports: [ConfigModule],
    //     useFactory: (configService: ConfigService) => ({
    //         type: 'mysql',
    //         host: configService.get('TYPEORM_HOST'),
    //         port: configService.get('TYPEORM_PORT'),
    //         username: configService.get('TYPEORM_USERNAME'),
    //         password: configService.get('TYPEORM_PASSWORD'),
    //         database: configService.get('TYPEORM_DATABASE'),
    //         autoLoadEntities: true,
    //         synchronize: configService.get('TYPEORM_SYNCHRONIZE'),
    //     }),
    //     inject: [ConfigService],
    // }),
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
    TypeOrmModule.forFeature([User, UserRepository], 'UserConnection'),
    TypeOrmModule.forFeature([Photo, PhotoRepository], 'PhotoConnection'),
    PhotoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
