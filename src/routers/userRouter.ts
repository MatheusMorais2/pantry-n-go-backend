import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import userController from "../controllers/userController.js";
import signupSchema from "../schemas/signupSchema.js";
import signinSchema from "../schemas/signinSchema.js";
import errorHandlingMiddleware from "../middlewares/errorHandlingMiddleware.js";

const userRouter = Router();

userRouter.post(
  "/auth/sign-up",
  schemaValidationMiddleware(signupSchema),
  errorHandlingMiddleware,
  userController.signUp
);
userRouter.post(
  "/auth/sign-in",
  schemaValidationMiddleware(signinSchema),
  errorHandlingMiddleware,
  userController.signIn
);

export default userRouter;
