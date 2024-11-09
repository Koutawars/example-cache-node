import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { HttpRequest } from "../../../../../domain/models/HttpRequest";
import { DeleteUserByIdUsecase } from "../../../../../usecase/user/deleteUserById";
import { handleError } from "../../../../../utils/handleError";
import { validateJoi } from "../../../../../utils/validateJoi";
import { schema } from "../schema/deleteUserById";

export const deleteUserById = (getUserByIdUsecase: DeleteUserByIdUsecase) => {
  return async (httpRequest: HttpRequest): Promise<ControllerResponse> => {
    try {
      validateJoi(schema, httpRequest);
      const { id } = httpRequest.params;
      const users = await getUserByIdUsecase(id);
      return {
        body: users,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}