import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: ProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Succesfully created',
            product
        });
    }

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        res.status(HttpStatus.OK).json({
            products
        });
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if(!product) throw new NotFoundException('Product does not exist');
        res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDelete = await this.productService.deleteProduct(productID);
        if(!productDelete) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product deleted succesfully',
            productDelete
        });
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: ProductDTO, @Query('productID') productID) {
        const productUpdate = await this.productService.updateProduct(productID, createProductDTO);
        if(!productUpdate) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product updated successfully',
            productUpdate
        });
    }
}
