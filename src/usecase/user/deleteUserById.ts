import { CacheRepository } from "../../infrastructure/driven/cache/CacheRepository";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";
import { constants } from "../../utils/constants";

export type DeleteUserByIdUsecase = (id: string) => Promise<void>;

export const buildDeleteUser = ({
  userRepository,
  cacheRepository
}: {
  userRepository: UserRepository,
  cacheRepository: CacheRepository
}): DeleteUserByIdUsecase => {
  return async (id) => {
    await cacheRepository.del(constants.cache.ALL_USERS);
    await cacheRepository.del(`${constants.cache.USER_BY_ID}:${id}`);
    await userRepository.deleteById(id);
  }
}