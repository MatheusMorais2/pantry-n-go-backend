import { Request, Response } from "express";
import exampleService from "../services/exampleService.js";

export async function postExample(req: Request, res: Response) {
  const response = await exampleService.findAll();
  return res.status(200).send(response);
}
