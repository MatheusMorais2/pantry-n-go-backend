import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import userController from "../controllers/userController.js";
import signupSchema from "../schemas/signupSchema.js";

const userRouter = Router();

userRouter.post(
  "/auth/sign-up",
  schemaValidationMiddleware(signupSchema),
  userController.signUp
);

export default userRouter;
