import { BooksEntity } from 'src/books/books.entity';

export interface UsersDTO {
    id: number;
    name: string;
    email: string;
    birthday: Date;
    books : BooksEntity[];
}