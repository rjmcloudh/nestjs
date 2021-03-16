import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { BooksEntity } from 'src/books/books.entity';
import { Connection } from 'typeorm';
import { UsersEntity } from '../../users/users.entity';

@Module({
	imports:[
		TypeOrmModule.forRoot({
			type: 'mysql',
			host:'localhost',
			port: 3306, 
			username:'admin',
			password: 'theoutback200km', 
			database:'nest',
			entities:[
				UsersEntity, BooksEntity
			 ],
			 synchronize:true
		}),		
	]
	
})
export class DatabaseModule {
	constructor( private readonly connection:Connection){
	}
}
