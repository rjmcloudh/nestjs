import { UsersEntity } from 'src/users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity('books')
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isbn: string;

  @Column({name: 'author_id', nullable: true})
  author_id: number;

  @ManyToOne(() => UsersEntity, user => user.books)
  @JoinColumn({name: 'author_id'})
  author : UsersEntity;

  @ManyToMany(() => UsersEntity, user => user.books,
  {
    cascade: true
  })
  @JoinTable()
    contributors: UsersEntity[];

}