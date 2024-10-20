import { userUsecase } from "../../../../../usecase/user";
import { buildGetUsers } from "./getUsers";

const getUsers = buildGetUsers(userUsecase.getUsers);

export const userController = {
  getUsers
};