import { userRepository } from "../../infrastructure/driven/user";
import { buildCreateUser } from "./createUser";
import { buildDeleteUser } from "./deleteUserById";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";
import { buildUpdateUser } from "./updateUser";

const getUsers = buildGetUsers({ userRepository });
const getUserById = buildGetUserById({ userRepository });
const updateUser = buildUpdateUser({ userRepository });
const createUser = buildCreateUser({ userRepository });
const deleteUser = buildDeleteUser({ userRepository });

export const userUsecase = {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser
}