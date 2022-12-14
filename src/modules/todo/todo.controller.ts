import { TodoType } from './todo.type';
import { todoService } from './todo.service';
import { Controller, Get, Post, Body, Param, Put, Patch } from '@nestjs/common';

@Controller('todo')
export class todoController {
  constructor(private service: todoService) {}

  @Get()
  async getAll(): Promise<TodoType[]> {
    return await this.service.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<TodoType> {
    return await this.service.getById(id);
  }

  @Post('/create')
  async create(@Body() body: TodoType): Promise<TodoType> {
    return await this.service.create(body);
  }

  @Put('/edit/:id')
  async edit(
    @Param('id') id: string,
    @Body() body: TodoType,
  ): Promise<TodoType> {
    return await this.service.edit(id, body);
  }

  @Patch('/status/:id')
  async editStatus(@Param('id') id: string): Promise<TodoType> {
    return await this.service.editStatus(id);
  }
}
