import { User } from "../../../domain/models/User";

export interface UserRepository {
  findAll: () => Promise<User[]>;
}