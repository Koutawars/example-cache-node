import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type UpdateUserUsecase = (id: string, user: Partial<User>) => Promise<User>;

export const buildUpdateUser = ({
  userRepository
}: {
  userRepository: UserRepository
}): UpdateUserUsecase => {
  return async (id, user) => {
    return await userRepository.update(id, user);
  }
}