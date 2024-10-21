import { ErrorHttp } from "../../domain/models/ErrorHttp";
import { User } from "../../domain/models/User";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";

export type GetUserByIdUsecase = (input: { id: string }) => Promise<User>;

export const buildGetUserById = ({
  userRepository
}: {
  userRepository: UserRepository
}): GetUserByIdUsecase => {
  return async (input) => {
    const user = await userRepository.findById(input.id);
    if (!user) {
      throw new ErrorHttp(404, `User with id ${input.id} not found`);
    }
    return user;
  }
}