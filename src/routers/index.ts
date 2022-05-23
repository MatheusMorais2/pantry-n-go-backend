import { Router } from "express";
import userRouter from "./userRouter.js";
import ingredientRouter from "./ingredientRouter.js";
import recipeRouter from "./recipeRouter.js";

const router = Router();
router.use(userRouter);
router.use(ingredientRouter);
router.use(recipeRouter);

export default router;
