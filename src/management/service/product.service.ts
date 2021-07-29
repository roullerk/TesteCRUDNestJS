import { Product } from './../tasks/product';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    product: Product[] = [
        { id: 1, name: 'Pizza', price: 20.00, category: 'Massa' },
        { id: 2, name: 'Bala', price: 1.00, category: 'Doce' },
        { id: 3, name: 'Café', price: 4.00, category: 'tyr6jBebida' }
    ];

    getAll(){
        return this.product;
    }

    getById(id: number){
        const product = this.product.find((value) => value.id == id)
        return product;
    }

    create(product: Product){
        let lastId = 0;
        if (this.product.length > 0){
            lastId = this.product[this.product.length - 1 ].id
        }
        product.id = lastId +1;
        this.product.push(product)
        return product
    }

    update(product: Product){
        const productArray = this.getById(product.id)
        if(productArray){
            productArray.name = product.name
            productArray.price = product.price
            productArray.category = product.category
        }
        return productArray
    }

    delete(id: number){
        const index = this.product.findIndex((value) => value.id == id)
        this.product.splice(index,1);
    }
}
