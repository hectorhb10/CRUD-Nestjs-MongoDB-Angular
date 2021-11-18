import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productID: String): Promise<Product> {
        const product = await this.productModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO:ProductDTO): Promise<Product> {
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID: string): Promise<Product> {
        const productDelete = await this.productModel.findByIdAndDelete(productID);
        return productDelete;
    }

    async updateProduct(productID: string, createProductDTO: ProductDTO): Promise<Product> {
        const productUpdate = await this.productModel.findByIdAndUpdate(productID, createProductDTO, { new: true });
        return productUpdate;
    }
}
