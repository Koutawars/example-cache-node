import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { GetUsersUsecase } from "../../../../../usecase/user/getUsers";
import { handleError } from "../../../../../utils/handleError";

export const buildGetUsers = (getPostsUsecase: GetUsersUsecase) => {
  return async (): Promise<ControllerResponse> => {
    try {
      const posts = await getPostsUsecase();
      return {
        body: posts,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}