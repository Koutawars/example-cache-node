import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { HttpRequest } from "../../../../../domain/models/HttpRequest";
import { GetUserByIdUsecase } from "../../../../../usecase/user/getUserById";
import { handleError } from "../../../../../utils/handleError";

export const buildGetUserById = (getUserByIdUsecase: GetUserByIdUsecase) => {
  return async (httpRequest: HttpRequest): Promise<ControllerResponse> => {
    try {
      const { id } = httpRequest.params;
      const posts = await getUserByIdUsecase({ id });
      return {
        body: posts,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}