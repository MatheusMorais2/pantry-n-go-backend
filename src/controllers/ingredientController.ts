import { Request, Response } from "express";
import ingredientService from "../services/ingredientService.js";

async function searchIngredients(req: Request, res: Response) {
  const ingredientQuery = req.params.ingredient;

  const ingredientList = await ingredientService.searchIngredient(
    ingredientQuery
  );
  res.send(ingredientList).status(200);
}

async function createIngredient(req: Request, res: Response) {
  const { spoonacularId } = req.body.ingredient;

  await ingredientService.createIngredient(spoonacularId);

  res.sendStatus(201);
}

interface User {
  id: number;
  email: string;
  name: string;
}

async function createUserIngredient(req: Request, res: Response) {
  const user: User = res.locals.user;
  const spoonacularId: number = parseInt(req.body.spoonacularId);
  console.log("user", user);
  console.log("spoonacularId: ", spoonacularId);

  await ingredientService.createUserIngredient(user.id, spoonacularId);

  res.sendStatus(201);
}

async function getUserIngredients(req: Request, res: Response) {
  const user: User = res.locals.user;

  const ingredientList = await ingredientService.getUserIngredients(user.id);

  res.send(ingredientList).status(200);
}

async function deleteUserIngredient(req: Request, res: Response) {
  const user: User = res.locals.user;
  const userIngredientId: number = parseInt(req.params.userIngredientId);

  const ingredientList = await ingredientService.deleteUserIngredient(
    userIngredientId,
    user.id
  );

  res.send(ingredientList).status(200);
}

async function getRecommendedIngredients(req: Request, res: Response) {
  const ingredientList = await ingredientService.getRecommendedIngredients();

  res.send(ingredientList).status(200);
}

export default {
  searchIngredients,
  createIngredient,
  createUserIngredient,
  getUserIngredients,
  deleteUserIngredient,
  getRecommendedIngredients,
};
