import { User } from "../../domain/models/User";
import { CacheRepository } from "../../infrastructure/driven/cache/CacheRepository";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";
import { constants } from "../../utils/constants";

export type UpdateUserUsecase = (id: string, user: Partial<User>) => Promise<User>;

export const buildUpdateUser = ({
  userRepository,
  cacheRepository
}: {
  userRepository: UserRepository,
  cacheRepository: CacheRepository
}): UpdateUserUsecase => {
  return async (id, user) => {
    const userUpdated =  await userRepository.update(id, user);
    await cacheRepository.del(constants.cache.ALL_USERS);
    await cacheRepository.del(`${constants.cache.USER_BY_ID}:${id}`);
    return userUpdated;
  }
}