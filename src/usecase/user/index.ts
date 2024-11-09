import { cacheRepository } from "../../infrastructure/driven/cache";
import { userRepository } from "../../infrastructure/driven/user";
import { buildCreateUser } from "./createUser";
import { buildDeleteUser } from "./deleteUserById";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";
import { buildUpdateUser } from "./updateUser";

const getUsers = buildGetUsers({ userRepository, cacheRepository });
const getUserById = buildGetUserById({ userRepository, cacheRepository });
const updateUser = buildUpdateUser({ userRepository, cacheRepository });
const createUser = buildCreateUser({ userRepository, cacheRepository });
const deleteUser = buildDeleteUser({ userRepository, cacheRepository });

export const userUsecase = {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser
}