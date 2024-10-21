import { User } from "../../../domain/models/User";

export interface UserRepository {
  findAll: () => Promise<User[]>;
  findById: (id: string) => Promise<User | null>;
  create: (user: User) => Promise<void>;
  update: (id: string, user: User) => Promise<void>;
}