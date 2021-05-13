import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import e from 'express';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repository: Repository<User>,
      ) {}
    
      async findAll(): Promise<User[]> {
        return await this.repository.find();
      }

      async getByEmail(email: string): Promise<User> {
        let sql = `select * from [user] u where u.[email] = '${email}'`

        const array = await this.repository.query(sql)

        if(array){
          return array[0]
        }
        
        return null
      }

      async create(user: User): Promise<User> {
        return await this.repository.save(user);
      }
    
      async update(user: User): Promise<UpdateResult> {
        return await this.repository.update(user.id, user);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.repository.delete(id);
      }
    
}
