import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type GetUsersUsecase = () => Promise<User[]>;

export const buildGetUsers = ({
  userRepository
}: {
  userRepository: UserRepository
}): GetUsersUsecase => {
  return async () => {
    const users = await userRepository.findAll();
    return users;
  }
}