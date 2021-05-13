import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './clientes.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private repository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.repository.find();
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return await this.repository.save(cliente);
  }

  async update(cliente: Cliente): Promise<UpdateResult> {
    return await this.repository.update(cliente.id, cliente);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }

  getCliente(lClientes: Cliente[], cpf: string): Cliente {
    let cli = new Cliente();

    cli.C0 = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].C0;
    cli.INSCRICAO =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].INSCRICAO;
    cli.RAZAO_SOCIAL =
      lClientes[
        Math.floor(Math.random() * (lClientes.length + 1))
      ].RAZAO_SOCIAL;
    cli.FANTASIA =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].FANTASIA;
    cli.EMAIL =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].EMAIL;
    cli.DDD = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].DDD;
    cli.TELEFONE =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].TELEFONE;
    cli.FAX = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].FAX;
    cli.ENDERECO_FAT =
      lClientes[
        Math.floor(Math.random() * (lClientes.length + 1))
      ].ENDERECO_FAT;
    cli.BAIRRO_FAT =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].BAIRRO_FAT;
    cli.CEP = lClientes[Math.floor(Math.random() * (lClientes.length + 1))].CEP;
    cli.NUMERO =
      lClientes[Math.floor(Math.random() * (lClientes.length + 1))].NUMERO;

    if (cpf == 'true') {
      cli.CGC = this.cpf(true);
    } else {
      cli.CGC = this.cnpj(true);
    }

    cli.OBSERVACAO = 'Cliente de teste gerado atravez da API fake.';

    return cli;
  }

  cpf(comPontos: boolean): string {
    let n: number = 9;
    let n1 = this.randomiza(n);
    let n2 = this.randomiza(n);
    let n3 = this.randomiza(n);
    let n4 = this.randomiza(n);
    let n5 = this.randomiza(n);
    let n6 = this.randomiza(n);
    let n7 = this.randomiza(n);
    let n8 = this.randomiza(n);
    let n9 = this.randomiza(n);
    let d1 =
      n9 * 2 +
      n8 * 3 +
      n7 * 4 +
      n6 * 5 +
      n5 * 6 +
      n4 * 7 +
      n3 * 8 +
      n2 * 9 +
      n1 * 10;

    d1 = 11 - this.mod(d1, 11);

    if (d1 >= 10) d1 = 0;

    let d2 =
      d1 * 2 +
      n9 * 3 +
      n8 * 4 +
      n7 * 5 +
      n6 * 6 +
      n5 * 7 +
      n4 * 8 +
      n3 * 9 +
      n2 * 10 +
      n1 * 11;

    d2 = 11 - this.mod(d2, 11);

    let retorno: string = null;

    if (d2 >= 10) d2 = 0;
    retorno = '';

    if (comPontos)
      retorno =
        '' +
        n1 +
        n2 +
        n3 +
        '.' +
        n4 +
        n5 +
        n6 +
        '.' +
        n7 +
        n8 +
        n9 +
        '/' +
        d1 +
        d2;
    else retorno = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;

    return retorno;
  }

  cnpj(comPontos: boolean): string {
    let n: number = 9;
    let n1 = this.randomiza(n);
    let n2 = this.randomiza(n);
    let n3 = this.randomiza(n);
    let n4 = this.randomiza(n);
    let n5 = this.randomiza(n);
    let n6 = this.randomiza(n);
    let n7 = this.randomiza(n);
    let n8 = this.randomiza(n);
    let n9 = 0; //randomiza(n);
    let n10 = 0; //randomiza(n);
    let n11 = 0; //randomiza(n);
    let n12 = 1; //randomiza(n);
    let d1 =
      n12 * 2 +
      n11 * 3 +
      n10 * 4 +
      n9 * 5 +
      n8 * 6 +
      n7 * 7 +
      n6 * 8 +
      n5 * 9 +
      n4 * 2 +
      n3 * 3 +
      n2 * 4 +
      n1 * 5;

    d1 = 11 - this.mod(d1, 11);

    if (d1 >= 10) d1 = 0;

    let d2 =
      d1 * 2 +
      n12 * 3 +
      n11 * 4 +
      n10 * 5 +
      n9 * 6 +
      n8 * 7 +
      n7 * 8 +
      n6 * 9 +
      n5 * 2 +
      n4 * 3 +
      n3 * 4 +
      n2 * 5 +
      n1 * 6;

    d2 = 11 - this.mod(d2, 11);

    if (d2 >= 10) d2 = 0;

    let retorno: string = null;

    if (comPontos)
      retorno =
        '' +
        n1 +
        n2 +
        '.' +
        n3 +
        n4 +
        n5 +
        '.' +
        n6 +
        n7 +
        n8 +
        '/' +
        n9 +
        n10 +
        n11 +
        n12 +
        '-' +
        d1 +
        d2;
    else
      retorno =
        '' +
        n1 +
        n2 +
        n3 +
        n4 +
        n5 +
        n6 +
        n7 +
        n8 +
        n9 +
        n10 +
        n11 +
        n12 +
        d1 +
        d2;

    return retorno;
  }

  randomiza(n: number): number {
    let ranNum = Math.random() * n;
    return parseInt(ranNum.toFixed(0));
  }

  mod(dividendo: number, divisor: number): number {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
  }
}
