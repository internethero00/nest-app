import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface UserCreationAttrs{
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs >{

  @ApiProperty({example: '1', description: 'unique indicator'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ApiProperty({example: 'user@mail.com', description: 'email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare email: string;

  @ApiProperty({example: 'qwerty123', description: 'password'})
  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @ApiProperty({example: 'false', description: 'ban status'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare banned: boolean;

  @ApiProperty({example: 'bad behavior', description: 'reason of ban'})
  @Column({ type: DataType.STRING, allowNull: true })
  declare banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  declare roles: Role[];

}