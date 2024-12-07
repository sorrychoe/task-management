import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './tasks.interface';
import { v4 as uuid } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class TasksService {
  private dataPath = path.join(__dirname, '../../model/db.json');
  private data: { tasks: Task[] } = { tasks: [] };

  constructor() {
    this.load();
  }

  private load() {
    if (fs.existsSync(this.dataPath)) {
      const rawData = fs.readFileSync(this.dataPath, 'utf8');
      this.data = JSON.parse(rawData);
    }
  }

  private write() {
    fs.writeFileSync(this.dataPath, JSON.stringify(this.data, null, 2));
  }

  findAll(status?: string): Task[] {
    if (status) {
      return this.data.tasks.filter(task => task.status === status);
    }
    return this.data.tasks;
  }

  create(taskData: Partial<Task>): Task {
    const task: Task = {
      id: uuid(),
      title: taskData.title ?? '',
      description: taskData.description ?? '',
      status: taskData.status ?? 'pending',
    };
    this.data.tasks.push(task);
    this.write();
    return task;
  }

  update(id: string, updateData: Partial<Task>, status?: string): Task {
    const task = this.data.tasks.find(t => t.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (status && task.status !== status) {
      throw new NotFoundException('Task not found');
    }

    Object.assign(task, updateData);
    this.write();
    return task;
  }
}
