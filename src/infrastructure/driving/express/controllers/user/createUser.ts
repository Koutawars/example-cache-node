import { ControllerResponse } from "../../../../../domain/models/ControllerResponse";
import { HttpRequest } from "../../../../../domain/models/HttpRequest";
import { User } from "../../../../../domain/models/User";
import { CreateUserUsecase } from "../../../../../usecase/user/createUser";
import { handleError } from "../../../../../utils/handleError";
import { validateJoi } from "../../../../../utils/validateJoi";
import { schema } from "../schema/createUser";

export const buildCreateUser = (createUserUsecase: CreateUserUsecase) => {
  return async (httpRequest: HttpRequest<User>): Promise<ControllerResponse> => {
    try {
      validateJoi(schema, httpRequest);
      const user = {
        name: httpRequest.body.name,
        email: httpRequest.body.email,
      }
      const createUser = await createUserUsecase(user);
      return {
        body: createUser,
        status: 200
      };
    } catch (error) {
      return handleError(error);
    }
  }
}