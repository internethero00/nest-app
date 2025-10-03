import { IsNumber, IsString } from 'class-validator';

export class CreatePostDto{
  @IsString({message: 'have to be string' })
  readonly title: string;
  @IsString({message: 'have to be string' })
  readonly content: string;
  @IsNumber({}, {message: 'have to be number' })
  readonly userId: number;
}