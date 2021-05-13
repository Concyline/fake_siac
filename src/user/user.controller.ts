import { UserService } from './user.service';
import { User } from './user.entity';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    index(): Promise<User[]> {
      return this.userService.findAll();
    } 
    
    @Post()
    async create(@Body() user: User): Promise<any> {
      return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() user: User): Promise<any> {
        user.id = Number(id);
        return this.userService.update(user);
    } 

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.userService.delete(id);
    } 
    

}
