import { Response, Request } from "express";
// import testingService from "../services/testingService.js";

async function resetDbTests(req: Request, res: Response) {
//   await testingService.resetDbTests();

  res.sendStatus(200);
}

export default {
  resetDbTests,
};