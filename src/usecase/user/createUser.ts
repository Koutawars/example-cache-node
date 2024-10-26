import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type CreateUserUsecase = (user: Partial<User>) => Promise<void>;

export const buildCreateUser = ({
  userRepository
}: {
  userRepository: UserRepository
}): CreateUserUsecase => {
  return async (user) => {
    await userRepository.create(user);
  }
}