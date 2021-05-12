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

    @Get('fake/:cpf')
    async getFake(@Param('cpf') cpf): Promise<Cliente> {
      const promisseClientes = this.clientesService.findAll();

      let cli = new Cliente()

      await promisseClientes.then(lClientes => {
        
        cli.C0 = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].C0
        cli.INSCRICAO = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].INSCRICAO
        cli.RAZAO_SOCIAL = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].RAZAO_SOCIAL
        cli.FANTASIA = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].FANTASIA
        cli.EMAIL = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].EMAIL
        cli.DDD = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].DDD
        cli.TELEFONE = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].TELEFONE
        cli.FAX = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].FAX
        cli.ENDERECO_FAT = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].ENDERECO_FAT
        cli.BAIRRO_FAT = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].BAIRRO_FAT
        cli.CEP = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].CEP
        cli.NUMERO = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].NUMERO

        if(cpf == 'true'){
          cli.CGC = this.clientesService.cpf(true)
        }else{
          cli.CGC = this.clientesService.cnpj(true)
        }

        cli.OBSERVACAO = 'Cliente de teste gerado atravez da API fake.'

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
