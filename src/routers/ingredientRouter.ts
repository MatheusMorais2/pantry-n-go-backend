import { Router } from "express";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import ingredientController from "../controllers/ingredientController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const ingredientRouter = Router();

ingredientRouter.get(
  "/ingredient/search/:ingredient",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.searchIngredients
);

ingredientRouter.post(
  "/ingredient/create/:ingredient",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.createIngredient
);

ingredientRouter.get(
  "/ingredient/user",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.getUserIngredients
);

ingredientRouter.post(
  "/ingredient/user",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.createUserIngredient
);

ingredientRouter.delete(
  "/ingredient/user/:userIngredientId",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.deleteUserIngredient
);

ingredientRouter.get(
  "/ingredient/recommended",
  errorHandlingMiddleware,
  ensureAuthenticatedMiddleware,
  ingredientController.getRecommendedIngredients
);

export default ingredientRouter;
