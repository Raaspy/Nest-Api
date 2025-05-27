import { MinLength, MaxLength, IsString, IsNumber, Min } from 'class-validator';

export class CrearProductoDto {
  @IsString({ message: 'El nombre del producto debe ser una cadena de texto.' })
  @MinLength(3, { message: 'El nombre del producto debe tener al menos 3 caracteres.' })
  @MaxLength(50, { message: 'El nombre del producto no debe exceder los 50 caracteres.' })
  nombre: string;

  @IsNumber()
  @Min(100, { message: 'El precio debe ser un número mayor o igual a 100.' })
  precio: number;
}

// @IsNotEmpty no se usa junto con las validaciones de longitud, ya que @MinLength asegura que no esté vacío.
// @IsString antes de las validaciones de longitud, asegurando que el valor sea un string.
