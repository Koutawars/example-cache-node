import Joi from "joi";
import { ErrorHttp } from "../domain/models/ErrorHttp";

export const validateJoi = <T = unknown>(schema: Joi.AnySchema, data: T) => {
  const { error } = schema.validate(data);
  if (error) {
    throw new ErrorHttp(400, error.message);
  }
};