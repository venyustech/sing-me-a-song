import { prisma } from "../../src/database.js";
import { CreateRecommendationData } from "../../src/services/recommendationsService.js";

export default async function recommendationFactory(recommendation: CreateRecommendationData) {
  await prisma.recommendation.create({
    data: {
      ...recommendation,
    },
  });
}