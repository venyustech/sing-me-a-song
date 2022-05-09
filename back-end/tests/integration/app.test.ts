import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import bodysFactory from "../factory/bodysFactory.js";

describe("Recommendations tests", () => {
  beforeEach(truncateRecommendationDb())

  describe("POST: /recommendation", () => {
    it("should return status 201, given a valid body", async () => {
        const body = bodysFactory.recommendation();
        console.log(body);

        const response = await supertest(app).post("/recommendations").send(body);
        const createdRecommendation = await prisma.recommendation.findUnique({
            where: {
              name: body.name,
            },
        });

        expect(response.status).toEqual(201);
        expect(createdRecommendation).not.toBeNull();
    });
  })
  describe("POST: /recommendations/:id/upvote and /recommendations/:id/downvote", () => {
    it.todo("should score+ the song, given a valid ID and return status 200")
    it.todo("should score- the song, given a valid ID and return status 200")
  })
});


function truncateRecommendationDb(){
    return async () => {
        await prisma.$executeRaw`TRUNCATE TABLE recommendations`;
    };
}
