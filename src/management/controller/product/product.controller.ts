import { Product } from './../../tasks/product';
import { ProductService } from './../../service/product.service';
import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  
    constructor(private ProductService: ProductService){
 
    }
    @Get()
    async getAll() : Promise<Product[]> {
        return this.ProductService.getAll();
     }

     @Get(':id')
    async getById(@Param('id') id : number) : Promise<Product> {
        return this.ProductService.getById(id);
     }

     @Post()
     async create(@Body() product: Product) : Promise<Product> {
         return this.ProductService.create(product);
     }

     @Put(':id')
     async update(@Param("id") id : number, @Body() product : Product): Promise<Product>{
        product.id  = id;

        return this.ProductService.update(product)
     }

     @Delete(':id')
     async delete(@Param('id') id : number){
         this.ProductService.delete(id);
     }
}
