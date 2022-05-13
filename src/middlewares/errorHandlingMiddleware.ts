import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export default function errorHandlingMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.type === "error_not_found") return res.status(404).send(err.message);
  if (err.type === "error_unauthorized")
    return res.status(401).send(err.message);
  if (err.type === "error_duplicate") return res.status(401).send(err.message);
  if (err.type === "error_bad_request")
    return res.status(400).send(err.message);

  return res.sendStatus(500);
}
