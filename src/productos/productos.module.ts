import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';

@Module({
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductosModule {}
