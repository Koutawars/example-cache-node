import { userRepository } from "../../infrastructure/driven/user";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";

const getUsers = buildGetUsers({ userRepository });
const getUserById = buildGetUserById({ userRepository });

export const userUsecase = {
  getUsers,
  getUserById
}