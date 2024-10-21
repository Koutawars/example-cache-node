import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type UpdateUserUsecase = (id: string, user: User) => Promise<void>;

export const buildUpdateUser = ({
  userRepository
}: {
  userRepository: UserRepository
}): UpdateUserUsecase => {
  return async (id, user) => {
    await userRepository.update(id, user);
  }
}