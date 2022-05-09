import { Response, Request } from "express";
import testsService from "../services/testsService.js";

async function resetDbTests(req: Request, res: Response) {
  await testsService.resetDbTests();
  res.sendStatus(200);
}

export default {
  resetDbTests,
};