import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('posts')
export class PostsController {

  constructor(private readonly postService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(@Body(new ValidationPipe()) dto: CreatePostDto,
             @UploadedFile() image: string){
    return this.postService.create(dto, image)
  }
}
