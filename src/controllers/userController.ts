import { Request, Response } from "express";
import userService from "../services/userService.js";

export interface signupData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface signinData {
  email: string;
  password: string;
}

async function signUp(req: Request, res: Response) {
  const signupData = req.body;
  await userService.signUp(signupData);
  return res.sendStatus(201);
}

async function signIn(req: Request, res: Response) {
  const signInData: signinData = req.body;

  const response = await userService.signIn(signInData);
  return res.send(response).status(200);
}

export default {
  signUp,
  signIn,
};
