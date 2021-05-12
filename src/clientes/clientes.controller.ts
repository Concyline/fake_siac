import { Cliente } from './clientes.entity';
import { ClientesService } from './clientes.service';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
const fs = require('fs')

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService){}

    @Get()
    index(): Promise<Cliente[]> {
      return this.clientesService.findAll();
    } 

    @Get('fake')
    async getFake(): Promise<Cliente> {
      const promisseClientes = this.clientesService.findAll();

      let cli = new Cliente()

      await promisseClientes.then(lClientes => {
        cli = this.clientesService.getCliente(lClientes, 'false')
      })

      return cli;

    } 
    @Get('fake/:cpf')
    async getFakeParameter(@Param('cpf') cpf): Promise<Cliente> {
      const promisseClientes = this.clientesService.findAll();

      let cli = new Cliente()

      await promisseClientes.then(lClientes => {
        cli = this.clientesService.getCliente(lClientes, cpf)
      })

      return cli;
    } 
    

    @Post()
    async create(@Body() cliente: Cliente): Promise<any> {
      return this.clientesService.create(cliente);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() cliente: Cliente): Promise<any> {
        cliente.id = Number(id);
        console.log('Update #' + cliente.id)
        return this.clientesService.update(cliente);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.clientesService.delete(id);
    }  

    @Get('inicia')
    getInicia(): string{
      try {
        const jsonString = fs.readFileSync('./fake.json')
        const jsonData = JSON.parse(jsonString)
  
        for (var i = 0; i < jsonData.length; i++) {
          var counter = jsonData[i];
          this.create(counter)
        }
      
        return "Criado com sucesso"
      } catch(err) {
        return err
      }
    }
    

}
