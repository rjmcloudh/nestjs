import { UsersEntity } from 'src/users/users.entity';

export interface BooksDTO {
    id: number;
    name: string;
    isbn: string;
    author_id: number;
    author : UsersEntity;
    contributors: UsersEntity[];
  
}