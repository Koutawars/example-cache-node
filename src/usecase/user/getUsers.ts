import { User } from "../../domain/models/User";
import { CacheRepository } from "../../infrastructure/driven/cache/CacheRepository";
import { UserRepository } from "../../infrastructure/driven/user/UserRepository";
import { constants } from "../../utils/constants";

export type GetUsersUsecase = () => Promise<User[]>;

export const buildGetUsers = ({
  userRepository,
  cacheRepository
}: {
  userRepository: UserRepository,
  cacheRepository: CacheRepository
}): GetUsersUsecase => {
  return async () => {
    const cachedUsers = await cacheRepository.get(constants.cache.ALL_USERS);
    if (cachedUsers) {
      return JSON.parse(cachedUsers) as unknown as User[];
    }
    // simulate a delay of 2 seconds (to simulate a real scenario)
    await new Promise(resolve => setTimeout(resolve, 2000));

    const users = await userRepository.findAll();
    await cacheRepository.set(constants.cache.ALL_USERS, JSON.stringify(users));
    return users;
  }
}