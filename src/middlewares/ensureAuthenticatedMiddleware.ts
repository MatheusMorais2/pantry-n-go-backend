import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userService from "../services/userService.js";
import { unauthorized } from "../utils/errors.js";
dotenv.config();

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers["authorization"];
  if (!authorization) throw unauthorized("Missing authorization header");

  const token = authorization.replace("Bearer ", "");
  if (!token) throw unauthorized("Missing token");

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as {
      userId: number;
    };
    const user = await userService.findById(userId);
    delete user.password;

    res.locals.user = user;

    next();
  } catch {
    throw unauthorized("Invalid token");
  }
}
