import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @IsNumber({}, {message: 'have to be number' })
  @ApiProperty({example: '1', description: 'user id'})
  readonly userId: number;
  @IsString({message: 'have to be string' })
  @ApiProperty({example: 'bad behavior', description: 'reason of ban'})
  readonly banReason: string;
}