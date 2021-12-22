import { Injectable, Inject } from '@nestjs/common';
import { Photo } from './photo.entity';
import { PhotoRepository } from './photo.repository';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo, 'PhotoConnection')
    private readonly photoRepository: PhotoRepository,
  ) {}

  // async findAll(): Promise<Photo[]> {
  //   return await this.photoRepository.find();
  // }

  async createPhoto(name: string): Promise<string> {
    return await this.photoRepository.createPhoto(name);
  }
}
