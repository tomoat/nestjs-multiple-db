import { EntityRepository, Repository } from 'typeorm';
import { Photo } from './Photo.entity';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {
  async createPhoto(name: string): Promise<string> {
    const photo = this.create();
    photo.name = name;
    photo.save();
    return name;
  }
}
