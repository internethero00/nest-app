import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString({message: 'have to be string' })
  @ApiProperty({example: 'ADMIN', description: 'role'})
  readonly value: string;
  @IsString({message: 'have to be string' })
  @ApiProperty({example: 'full access', description: 'what role can do'})
  readonly description: string;
}