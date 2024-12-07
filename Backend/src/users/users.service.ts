// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { User } from './users.interface';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class UsersService {
  private dataPath = path.join(__dirname, '../../model/db.json');
  private data: { users: User[] } = { users: [] };

  constructor() {
    this.load();
  }

  private load() {
    if (fs.existsSync(this.dataPath)) {
      const rawData = fs.readFileSync(this.dataPath, 'utf8');
      const jsonData = JSON.parse(rawData);
      this.data.users = jsonData.users || [];
    }
  }

  private write() {
    const allData = { users: this.data.users }; 
    fs.writeFileSync(this.dataPath, JSON.stringify(allData, null, 2));
  }

  findById(id: string): User {
    const user = this.data.users.find(u => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  create(userData: Partial<User>): User {
    const user: User = {
      id: uuid(),
      name: userData.name ?? '',
      email: userData.email ?? '',
    };
    this.data.users.push(user);
    this.write();
    return user;
  }
}
