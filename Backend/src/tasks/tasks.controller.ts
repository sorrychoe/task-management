import { Controller, Get, Post, Put, Query, Param, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query('status') status?: string): Task[] {
    return this.tasksService.findAll(status);
  }

  @Post()
  createTask(@Body() body: Partial<Task>): Task {
    return this.tasksService.create(body);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() body: Partial<Task>,
    @Query('status') status?: string,
  ): Task {
    return this.tasksService.update(id, body, status);
  }
}
