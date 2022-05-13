import { Router } from "express";
import { schemaValidationMiddleware } from "../middlewares/schemaValidationMiddleware.js";
import { postExample } from "../controllers/exampleController.js";
import exampleSchema from "../schemas/exampleSchema.js";

const exampleRouter = Router();

exampleRouter.post("/", schemaValidationMiddleware(exampleSchema), postExample);

export default exampleRouter;
