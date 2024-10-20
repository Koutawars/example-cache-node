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
}