import { BooksEntity } from 'src/books/books.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthday: Date;

  @OneToMany(type => BooksEntity, books => books.author)
  books : BooksEntity[];

}