import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { HttpRequest } from "../../../../../domain/models/HttpRequest";
import { User } from "../../../../../domain/models/User";
import { UpdateUserUsecase } from "../../../../../usecase/user/updateUser";
import { handleError } from "../../../../../utils/handleError";
import { validateJoi } from "../../../../../utils/validateJoi";
import { schema } from "../schema/updateUser";

export const buildUpdateUser = (updateUserUsecase: UpdateUserUsecase) => {
  return async (httpRequest: HttpRequest<User>): Promise<ControllerResponse> => {
    try {
      validateJoi(schema, httpRequest);
      const { id } = httpRequest.params;
      const user = {
        id: id,
        name: httpRequest.body?.name,
        email: httpRequest.body?.email,
      }
      await updateUserUsecase(id, user);
      return {
        body: user,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}