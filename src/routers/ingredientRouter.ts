import { Router } from "express";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import ingredientController from "../controllers/ingredientController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const ingredientRouter = Router();

ingredientRouter.get(
  "/ingredient/search/:ingredient",
  errorHandlingMiddleware,
  /*   ensureAuthenticatedMiddleware, */
  ingredientController.searchIngredients
);

export default ingredientRouter;
