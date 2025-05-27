import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './interfaces/producto.interface';
import { CrearProductoDto } from './dto/crear-producto.dto';

@Injectable()
export class ProductosService {
  // Aquí irá la lógica para manejar productos

  private productos: Producto[] = [];
  private contadorId = 1;

  //Servicio para crear productos.
  crearProducto(dto: CrearProductoDto): Producto {
    const nuevoProducto: Producto = {
      id: this.contadorId++,
      ...dto,
    };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  //Servicio para obtener todos los productos.
  obtenerTodos() {
    return this.productos;
  }

  //Servicio para actualizar el producto por ID.
  actualizarProducto(id: number, dto: CrearProductoDto): Producto {
    const productoIndex = this.productos.findIndex((prod) => prod.id === id);
    console.log(productoIndex);

    //Comprobamos que exista el ID.
    if (productoIndex === -1) {
      throw new NotFoundException(`Producto con ID ${id} no fue encontrado.`);
    }

    const productoActualizado = {
      ...this.productos[productoIndex],
      ...dto,
    };

    this.productos[productoIndex] = productoActualizado;
    return productoActualizado;
  }

  //Servicio para eliminar el producto por ID.
  eliminarProducto(id: number): string {
    const index = this.productos.findIndex((prod) => prod.id === id);

    if (index === -1) {
      throw new NotFoundException(`No se encontró el producto con id ${id}`);
    }

    this.productos.splice(index, 1);
    return `Producto con id ${id} eliminado correctamente.`;
  }
}
