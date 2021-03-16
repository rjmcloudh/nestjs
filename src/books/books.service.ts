import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BooksDTO } from './books.dto';
import { BooksEntity } from './books.entity';


@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}

  async showAll() {
    return await this.booksRepository.find({relations: ['contributors']});
  }

  async create(data: BooksDTO) {
    const book = this.booksRepository.create(data);
    await this.booksRepository.save(data);
    return book;
  }

  async findByISBN(isbn: string): Promise<BooksDTO> {
    return await this.booksRepository.findOne({
      where: {
        isbn: isbn,
      },
    });
  }

  async read(id: number) {
    return await this.booksRepository.findOneOrFail({id: id}, {relations: ['contributors']})
    //return await this.booksRepository.findOne({ where: { id: id } });
  }

  async update(id: number, data: Partial<BooksDTO>) {
    var asd = await this.booksRepository.update({ id }, data);
    console.log(asd);
    return await this.booksRepository.findOne({ id });
  }

  async destroy(id: number) {
    await this.booksRepository.delete({ id });
    return { deleted: true };
  }
}

