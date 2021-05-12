import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    C0: string;

    @Column()
    INSCRICAO: string;

    @Column()
    RAZAO_SOCIAL: string;

    @Column()
    FANTASIA: string;

    @Column()
    EMAIL: string;

    @Column()
    DDD: string;

    @Column()
    TELEFONE: string;

    @Column()
    FAX: string;

    @Column()
    ENDERECO_FAT: string;

    @Column()
    BAIRRO_FAT: string;

    @Column()
    CEP: string;

    @Column()
    NUMERO: string;

    CGC: string;

    OBSERVACAO: string
}
