import { Request, Response } from "express";
import recipeService, { UserIngredient } from "../services/recipeService.js";

async function getRecipesByIngredients(req: Request, res: Response) {
  const ingredientList: string = req.params.ingredientList;
  console.log("ingredientList: ", ingredientList);

  const recipeList = await recipeService.getRecipesByIngredients(
    ingredientList
  );

  res.send(recipeList).status(200);
}

async function searchRecipes(req: Request, res: Response) {
  const searchQuery = req.params.query;
  const recipeList = await recipeService.searchRecipes(searchQuery);

  res.send(recipeList).status(200);
}

async function getRecipeInstructions(req: Request, res: Response) {
  const recipeId: number = parseInt(req.params.recipeId);
  console.log("recipeId: ", recipeId);
  const recipeInstructions = await recipeService.getRecipeInstructions(
    recipeId
  );

  res.send(recipeInstructions).status(200);
}

export default {
  getRecipesByIngredients,
  searchRecipes,
  getRecipeInstructions,
};
