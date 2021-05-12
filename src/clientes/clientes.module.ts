import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { ClientesController } from './clientes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cliente]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
