import { Request, Response, NextFunction } from "express";
import { badRequest } from "../utils/errors.js";

export function schemaValidationMiddleware(schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);

    if (validation.error) {
      console.log("validation.error: ", validation.error);
      throw badRequest("request");
    }
    next();
  };
}
