import { Router } from "express";
import userRouter from "./userRouter.js";
import ingredientRouter from "./ingredientRouter.js";

const router = Router();
router.use(userRouter);
router.use(ingredientRouter);

export default router;
