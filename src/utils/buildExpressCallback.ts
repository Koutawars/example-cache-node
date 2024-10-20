import { HttpRequest } from "../domain/models/HttpRequest";
import { Controller } from "../domain/models/Controller";
// import request from express and response
import { Request, Response } from "express";

export const buildExpressCallback = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: Partial<HttpRequest> = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: {
        Authorization: req.get("Authorization"),
        User: req.get("User"),
      },
    };

    const httpResponse = await controller(httpRequest);

    res.set(httpResponse.headers);
    res.type("json");
    res.status(httpResponse.status).send(httpResponse.body);
  };
}
