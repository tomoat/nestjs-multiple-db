import { EntityRepository, Repository } from 'typeorm';
import { powerSearch } from './power_search.entity';

@EntityRepository(powerSearch)
export class powerSearchRepository extends Repository<powerSearch> {
  // async createPowerSearch(keyword: string): Promise<string> {
  //   const power = this.create();
  //   power.keyword = keyword;
  //   power.save();
  //   return keyword;
  // }
}
