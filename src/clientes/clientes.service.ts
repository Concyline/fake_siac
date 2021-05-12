import { Cliente } from './clientes.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class ClientesService {

    constructor(
        @InjectRepository(Cliente)
        private contactRepository: Repository<Cliente>,
    ) { }


    async  findAll(): Promise<Cliente[]> {
        return await this.contactRepository.find();
    }

    async  create(cliente: Cliente): Promise<Cliente> {
        return await this.contactRepository.save(cliente);
    }

    async update(cliente: Cliente): Promise<UpdateResult> {
        return await this.contactRepository.update(cliente.id, cliente);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }

}
