import { Module } from '@nestjs/common';
import { ProductController } from './controller/product/product.controller';
import { ProductService } from './service/product.service';
import { OrdersService } from './service/orders.service';
import { OrdersController } from './controller/orders/orders.controller';


@Module({
    controllers: [ProductController, OrdersController],
    providers: [ProductService, OrdersService]
})
export class ManagementModule {}
