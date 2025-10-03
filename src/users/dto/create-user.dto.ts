import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({example: 'user@mail.com', description: 'email'})
  @IsString({ message: 'have to be string' })
  @IsEmail({}, {message: 'have to be a valid email'})
  readonly email: string;

  @ApiProperty({example: 'qwerty123', description: 'password'})
  @IsString({ message: 'have to be string' })
  @Length(5, 16, { message: 'have to be between 5 and 16 symbols' })
  readonly password: string;
}