import { Request, Response } from "express";
import userService from "../services/userService.js";

export interface signupData {
  email: string;
  name: string;
  password: string;
}

async function signUp(req: Request, res: Response) {
  const signupData = req.body;
  await userService.signUp(signupData);
  return res.sendStatus(201);
}

export default {
  signUp,
};
