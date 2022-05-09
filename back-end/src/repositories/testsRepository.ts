import { prisma } from "../database.js";

async function deleteAllDb() {
  await prisma.recommendation.deleteMany({});
}

export default {
  deleteAllDb,
};