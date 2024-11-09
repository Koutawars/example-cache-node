import { User } from "../../../domain/models/User";

export interface UserRepository {
  findAll: () => Promise<User[]>;
  findById: (id: string) => Promise<User | null>;
  create: (user: Partial<User>) => Promise<User>;
  update: (id: string, user: Partial<User>) => Promise<User>;
  deleteById: (id: string) => Promise<void>;
}