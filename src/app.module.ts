import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersEntity } from './users/users.entity';

import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { BooksEntity } from './books/books.entity';


@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([UsersEntity,BooksEntity])],
  controllers: [AppController, UsersController, BooksController],
  providers: [AppService, UsersService, BooksService],
})

export class AppModule {}
