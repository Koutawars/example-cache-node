import { userRepository } from "../../infrastructure/driven/user";
import { buildGetUsers } from "./getUsers";

const getUsers = buildGetUsers({ userRepository });

export const userUsecase = {
  getUsers
}