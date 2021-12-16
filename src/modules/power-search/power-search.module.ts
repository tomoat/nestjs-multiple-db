import { Module } from '@nestjs/common';
import { PowerSearchController } from './power-search.controller';
import { PowerSearchService } from './power-search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { powerSearchRepository } from './power_search.repository';

@Module({
  imports: [TypeOrmModule.forFeature([powerSearchRepository], 'mysql2')],
  controllers: [PowerSearchController],
  providers: [PowerSearchService],
  exports: [TypeOrmModule],
})
export class PowerSearchModule {}
