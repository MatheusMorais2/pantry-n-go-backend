import { Request, Response } from "express";
import ingredientService from "../services/ingredientService.js";

async function searchIngredients(req: Request, res: Response) {
  const ingredientQuery = req.params.ingredient;
  console.log("ingredientQuery: ", ingredientQuery);

  const ingredientList = await ingredientService.searchIngredient(
    ingredientQuery
  );
  res.send(ingredientList.data).status(200);
}

export default {
  searchIngredients,
};
