import { ErrorHttp } from "../domain/models/ErrorHttp";

export const handleError = (error: ErrorHttp | Error) => {
  if (error instanceof ErrorHttp) {
    return {
      body: {
        error: error.message
      },
      status: error.status
    }
  }
  console.log(error);
  return {
    body: {
      error: "Internal Server Error"
    },
    status: 500
  }
}