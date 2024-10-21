import { ErrorHttp } from "../../../domain/models/ErrorHttp";
import { User } from "../../../domain/models/User";
import { UserRepository } from "./UserRepository";
import * as fs from 'fs';

export class UserFile implements UserRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  async findAll(): Promise<User[]> {
    const data = await fs.promises.readFile(this.path, "utf-8");
    return JSON.parse(data);
  }

  async findById(id: string): Promise<User | null> {
    const data = await fs.promises.readFile(this.path, "utf-8");
    const users = JSON.parse(data);
    return users.find((user: User) => user.id === id) || null;
  }

  async create(user: User): Promise<void> {
    const data = await fs.promises.readFile(this.path, "utf-8");
    const users = JSON.parse(data);
    users.push(user);
    await fs.promises.writeFile(this.path, JSON.stringify(users));
  }

  async update(id: string, user: User): Promise<void> {
    const data = await fs.promises.readFile(this.path, "utf-8");
    const users = JSON.parse(data);
    const index = users.findIndex((user: User) => user.id === id);
    if (index === -1) {
      throw new ErrorHttp(404, `User with id ${id} not found`);
    }
    users[index] = user;
    await fs.promises.writeFile(this.path, JSON.stringify(users));
  }
}