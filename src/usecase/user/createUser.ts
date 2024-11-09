import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type CreateUserUsecase = (user: Partial<User>) => Promise<User>;

export const buildCreateUser = ({
  userRepository
}: {
  userRepository: UserRepository
}): CreateUserUsecase => {
  return async (user) => {
    return await userRepository.create(user);
  }
}