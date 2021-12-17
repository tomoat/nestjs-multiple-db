import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './modules/photo/photo.module';
import { UserModule } from './modules/user/user.module';
import { Photo } from './modules/photo/photo.entity';
// import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PhotoRepository } from './modules/photo/photo.repository';
import { User } from './modules/user/user.entity';
import { UserRepository } from './modules/user/user.repository';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { PeopleModule } from './modules/people/people.module';

import { PowerSearchModule } from './modules/power-search/power-search.module';
import { powerSearchRepository } from './modules/power-search/power_search.repository';
import { powerSearch } from './modules/power-search/power_search.entity';

const defaultOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  // username: 'admin',
  // password: '12345678',
  // database: 'power_search_db',
  // entities: [],
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
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'mysql1',
      database: 'power_search_db',
      username: 'admin',
      password: 'admin',
      entities: [],
    } as MysqlConnectionOptions),
    TypeOrmModule.forRoot({
      ...defaultOptions,
      name: 'mysql2',
      database: 'power_metadata',
      username: 'user',
      password: 'password',
      entities: [powerSearch],
    } as MysqlConnectionOptions),
    TypeOrmModule.forFeature([powerSearch, powerSearchRepository], 'mysql2'),
    PowerSearchModule,

    TypeOrmModule.forFeature([User, UserRepository], 'UserConnection'),
    TypeOrmModule.forFeature([Photo, PhotoRepository], 'PhotoConnection'),
    PhotoModule,
    UserModule,
    PeopleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
