import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDTO } from './books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async showAllBooks() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.booksService.showAll(),
    };
  }

  @Post()
  async createBooks(@Body() data: BooksDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Book added successfully',
      data: await this.booksService.create(data),
    };
  }

  @Get(':id')
  async readBook(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.booksService.read(id),
    };
  }

  @Patch(':id')
  async uppdateBook(@Param('id') id: number, @Body() data: Partial<BooksDTO>) {
    console.log(data)
    return {
      statusCode: HttpStatus.OK,
      message: 'Book update successfully',
      data: await this.booksService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number) {
    await this.booksService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Book deleted successfully',
    };
  }
}
