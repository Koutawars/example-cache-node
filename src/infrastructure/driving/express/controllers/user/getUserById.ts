import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { HttpRequest } from "../../../../../domain/models/HttpRequest";
import { GetUserByIdUsecase } from "../../../../../usecase/user/getUserById";
import { handleError } from "../../../../../utils/handleError";
import { validateJoi } from "../../../../../utils/validateJoi";
import { schema } from "../schema/getUserById";

export const buildGetUserById = (getUserByIdUsecase: GetUserByIdUsecase) => {
  return async (httpRequest: HttpRequest): Promise<ControllerResponse> => {
    try {
      validateJoi(schema, httpRequest);
      const { id } = httpRequest.params;
      const users = await getUserByIdUsecase({ id });
      return {
        body: users,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}