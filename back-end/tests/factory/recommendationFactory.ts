import { prisma } from "../../src/database.js";
import { CreateRecommendationData } from "../../src/services/recommendationsService.js";
import bodysFactory from "./bodysFactory.js";

async function createRecommendation(recommendation: CreateRecommendationData) {
  await prisma.recommendation.create({
    data: {
      ...recommendation,
    },
  });
}
async function createRecommendations() {
  const recommendations = [] ;
  for (let i = 0; i < 20; i++) {
    const body = bodysFactory.recommendation();
    recommendations.push(body)
  }
  
  await prisma.recommendation.createMany({
    data: [
      ...recommendations,
    ]
  });
}

export default {
    createRecommendation,
    createRecommendations
}