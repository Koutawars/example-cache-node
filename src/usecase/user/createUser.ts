import { User } from "../../domain/models/User";
import { CacheRepository } from "../../infrastructure/driven/cache/CacheRepository";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";
import { constants } from "../../utils/constants";

export type CreateUserUsecase = (user: Partial<User>) => Promise<User>;

export const buildCreateUser = ({
  userRepository,
  cacheRepository
}: {
  userRepository: UserRepository,
  cacheRepository: CacheRepository
}): CreateUserUsecase => {
  return async (user) => {
    await cacheRepository.del(constants.cache.ALL_USERS);
    return await userRepository.create(user);
  }
}