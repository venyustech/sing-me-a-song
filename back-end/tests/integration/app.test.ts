import app from "../../src/app.js";
import supertest from "supertest";
import { prisma } from "../../src/database.js";
import bodysFactory from "../factory/bodysFactory.js";
import recommendationFactory from "../factory/recommendationFactory.js";

describe("Recommendations tests", () => {
  afterAll(() => {return truncateRecommendationDb()});

  describe("POST: /recommendation", () => {
    
    it("should return status 201, given a valid body", async () => {
        const body = bodysFactory.recommendation();

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

    it("should score+ the song, given a valid ID and return status 200", async ()=>{
      const id = 1;

      const response = await supertest(app).post(`/recommendations/${id}/upvote`);

      const findedRecommendation = await prisma.recommendation.findUnique({
        where: {
          id: id,
        },
      });

      expect(response.status).toEqual(200);
      expect(findedRecommendation.score).toEqual(1);
    });

    it("should score- the song, given a valid ID and return status 200", async () => {
      const id = 1;

      const response = await supertest(app).post(`/recommendations/${id}/downvote`);

      const findedRecommendation = await prisma.recommendation.findUnique({
        where: {
          id: id,
        },
      });

      expect(response.status).toEqual(200);
      expect(findedRecommendation.score).toEqual(0);
    })
  });

   describe("GET: /recommendations by last 10 songs ", () => {
    beforeEach(() => {return truncateRecommendationDb()});

    it("should return last 10 songs", async () => {
      recommendationFactory.createRecommendations();
 
      const response = await supertest(app).get("/recommendations");

      expect(response.body[0].id).toEqual(20);
      expect(response.body).toHaveLength(10);
    });
  });

  describe("GET: /recommendations/:id", () => {
    beforeEach(() => {return truncateRecommendationDb()});

    it("should return the correct object", async () => {
      await recommendationFactory.createRecommendation();
      
      const id = 1;
      const result = await supertest(app).get(`/recommendations/${id}`);

      expect(result.body).toBeInstanceOf(Object);
      expect(result.body.id).toEqual(id);
    });
  });

  describe("GET:  /recommendations/random", () => {
    beforeEach(() => {return truncateRecommendationDb()});

    it("should return the correct object", async () => {
      await recommendationFactory.createRecommendations();

      const id = 1;
      await prisma.recommendation.update({
        where: {
          id: 1,
        },
        data: {
          score: 56,
        },
      });

      const response = await supertest(app).get("/recommendations/random");

      console.log("body**************: ", response.body)
      ////////********** to fix *************/////////

      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.id).toEqual(id);
    });
  });

});


async function truncateRecommendationDb(){
    return await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY`;
}
