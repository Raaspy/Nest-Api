import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';

@Module({
  imports: [ProductosModule],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
