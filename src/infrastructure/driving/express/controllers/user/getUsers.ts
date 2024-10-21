import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { GetUsersUsecase } from "../../../../../usecase/user/getUsers";
import { handleError } from "../../../../../utils/handleError";

export const buildGetUsers = (getUserUsecase: GetUsersUsecase) => {
  return async (): Promise<ControllerResponse> => {
    try {
      const users = await getUserUsecase();
      return {
        body: users,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}