import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';

const mongo = require('mongoose');

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot('mongodb://localhost/anime', {useNewUrlParser: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
