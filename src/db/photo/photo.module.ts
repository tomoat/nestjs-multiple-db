import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoRepository } from './photo.repository';

@Module({
  imports: [    
    TypeOrmModule.forFeature([PhotoRepository], 'PhotoConnection'),
  ],
  providers: [
    PhotoService,
  ],
  controllers: [PhotoController],
  exports: [TypeOrmModule],
})
export class PhotoModule {}
