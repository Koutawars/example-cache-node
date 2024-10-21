import { userRepository } from "../../infrastructure/driven/user";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";
import { buildUpdateUser } from "./updateUser";

const getUsers = buildGetUsers({ userRepository });
const getUserById = buildGetUserById({ userRepository });
const updateUser = buildUpdateUser({ userRepository });

export const userUsecase = {
  getUsers,
  getUserById,
  updateUser
}