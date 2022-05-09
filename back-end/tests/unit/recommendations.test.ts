import { jest } from "@jest/globals";

describe("/recomendations unit tests:", () => {
  describe("POST: /recommendations/:id/upvote AND /recommendations/:id/downvote", () => {
    it.todo("should return status 404 when score+ with invalid ID");
    it.todo("should return status 404 when score- with invalid ID");
    it.todo("should remove recommendation when (score < -5) ");

  });

  describe("GET: /recommendations/random", () => {
    it.todo("should return status 404 when there is no recommendations");
    it.todo("should return recommendations  with (-5 < score < 10)");
  });
});