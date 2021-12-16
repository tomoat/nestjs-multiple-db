import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { powerSearch } from './power_search.entity';
import { powerSearchRepository } from './power_search.repository';

@Injectable()
export class PowerSearchService {
  constructor(
    @InjectRepository(powerSearch, 'mysql2')
    private readonly powerSearchRepo: powerSearchRepository,
  ) {}
}
