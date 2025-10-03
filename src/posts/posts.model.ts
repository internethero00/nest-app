import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';


interface PostCreationAttrs{
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs >{

  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare content: string;

  @Column({ type: DataType.STRING,})
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER})
  declare userId: number;

  @BelongsTo(() => User)
  author: User;

}