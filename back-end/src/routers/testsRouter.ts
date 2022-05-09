import { Router } from "express";
import testsController from "../controllers/testsController.js";

const testsRouter = Router();

testsRouter.post("/tests/reset/dbTests", testsController.resetDbTests);

export default testsRouter;