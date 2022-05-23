import { Router } from "express";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";
import recipeController from "../controllers/recipeController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const recipeRouter = Router();

recipeRouter.get(
  "/recipes/ingredient/:ingredientList",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  recipeController.getRecipesByIngredients
);

recipeRouter.get(
  "/recipes/search/:query",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  recipeController.searchRecipes
);
recipeRouter.get(
  "/recipes/instructions/:recipeId",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  recipeController.getRecipeInstructions
);

export default recipeRouter;
