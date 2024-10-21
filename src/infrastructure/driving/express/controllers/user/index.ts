import { userUsecase } from "../../../../../usecase/user";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";
import { buildUpdateUser } from "./updateUser";

const getUsers = buildGetUsers(userUsecase.getUsers);
const getUserById = buildGetUserById(userUsecase.getUserById);
const updateUser = buildUpdateUser(userUsecase.updateUser);

export const userController = {
  getUsers,
  getUserById,
  updateUser
};