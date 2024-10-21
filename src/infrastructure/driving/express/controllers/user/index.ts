import { userUsecase } from "../../../../../usecase/user";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";

const getUsers = buildGetUsers(userUsecase.getUsers);
const getUserById = buildGetUserById(userUsecase.getUserById);

export const userController = {
  getUsers,
  getUserById
};