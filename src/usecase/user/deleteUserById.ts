import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type DeleteUserByIdUsecase = (id: string) => Promise<void>;

export const buildDeleteUser = ({
  userRepository
}: {
  userRepository: UserRepository
}): DeleteUserByIdUsecase => {
  return async (id) => {
    await userRepository.deleteById(id);
  }
}