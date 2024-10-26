import { userUsecase } from "../../../../../usecase/user";
import { buildCreateUser } from "./createUser";
import { buildGetUserById } from "./getUserById";
import { buildGetUsers } from "./getUsers";
import { buildUpdateUser } from "./updateUser";

const getUsers = buildGetUsers(userUsecase.getUsers);
const getUserById = buildGetUserById(userUsecase.getUserById);
const updateUser = buildUpdateUser(userUsecase.updateUser);
const createUser = buildCreateUser(userUsecase.createUser);

export const userController = {
  getUsers,
  getUserById,
  updateUser,
  createUser
};