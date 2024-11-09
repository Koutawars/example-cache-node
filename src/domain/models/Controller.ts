import { ControllerResponse } from "./ControllerResponse";
import { HttpRequest } from "./HttpRequest";

export type Controller = (
	request: Partial<HttpRequest>,
) => Promise<ControllerResponse>;