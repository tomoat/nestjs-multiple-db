import { Controller, Body, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
  @Post()
  addSetting(@Body('name') name: string): Promise<void> {
    this.photoService.createPhoto(name);
    return null;
  }
}
