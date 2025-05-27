import { ParseIntPipe, Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { Producto } from './interfaces/producto.interface';

@Controller('productos')
export class ProductosController {
  // Aquí vamos a agregar métodos como @Get(), @Post(), etc., que se encargarán de manejar las solicitudes HTTP.

  constructor(private productosService: ProductosService) {}

  @Post()
  crear(@Body() dto: CrearProductoDto): Producto {
    return this.productosService.crearProducto(dto);
  }

  @Get()
  obtenerProductos(): Producto[] {
    return this.productosService.obtenerTodos();
  }

  @Put(':id')
  actualizar(@Param('id', ParseIntPipe) id: number, @Body() dto: CrearProductoDto): Producto {
    return this.productosService.actualizarProducto(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number): string {
    return this.productosService.eliminarProducto(id);
  }
}
