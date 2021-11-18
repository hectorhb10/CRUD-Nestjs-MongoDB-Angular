import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { producSchema } from './schemas/product.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([
      { name: 'Product', schema: producSchema }
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
