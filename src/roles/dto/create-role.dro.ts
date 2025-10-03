import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({example: 'ADMIN', description: 'role'})
  readonly value: string;
  @ApiProperty({example: 'full access', description: 'what role can do'})
  readonly description: string;
}