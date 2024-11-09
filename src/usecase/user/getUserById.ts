import { ErrorHttp } from "../../domain/models/ErrorHttp";
import { User } from "../../domain/models/User";
import { CacheRepository } from "../../infrastructure/driven/cache/CacheRepository";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";
import { constants } from "../../utils/constants";

export type GetUserByIdUsecase = (input: { id: string }) => Promise<User>;

export const buildGetUserById = ({
  userRepository,
  cacheRepository
}: {
  userRepository: UserRepository,
  cacheRepository: CacheRepository
}): GetUserByIdUsecase => {
  return async (input) => {
    const cachedUser = await cacheRepository.get(`${constants.cache.USER_BY_ID}:${input.id}`);
    if (cachedUser) {
      return JSON.parse(cachedUser) as unknown as User;
    }
    // simulate a delay of 2 seconds (to simulate a real scenario)
    await new Promise(resolve => setTimeout(resolve, 2000));
    const user = await userRepository.findById(input.id);
    if (!user) {
      throw new ErrorHttp(404, `User with id ${input.id} not found`);
    }
    await cacheRepository.set(`${constants.cache.USER_BY_ID}:${input.id}`, JSON.stringify(user));
    return user;
  }
}