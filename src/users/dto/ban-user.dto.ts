import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({example: '1', description: 'user id'})
  readonly userId: string;
  @ApiProperty({example: 'bad behavior', description: 'reason of ban'})
  readonly banReason: string;
}