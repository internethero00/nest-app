import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({message: 'have to be string' })
  @ApiProperty({example: 'ADMIN', description: 'role'})
  readonly value: string;
  @IsNumber({}, {message: 'have to be number' })
  @ApiProperty({example: '1', description: 'user id'})
  readonly userId: number;
}