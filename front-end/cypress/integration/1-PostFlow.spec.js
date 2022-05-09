/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("POST: add song and vote", () => {
    beforeEach(() => {
        cy.request("POST", "http://localhost:5000/tests/reset/dbTests");
    });

    it("should post a song and vote on that ", () => {
        const name = faker.lorem.words(5);
        cy.visit("http://localhost:3000/");

        cy.get("input[name=name]").type(name);
        cy.get("input[name=link]").type("https://www.youtube.com/watch?v=O2CIAKVTOrc");

        cy.intercept("POST", "/recommendations").as("postRecommendation");

        cy.get("button[type=button]").click();

        cy.wait("@postRecommendation");
        cy.contains(name).should("be.visible");

        for (let i = 0; i < 5; i++)
            cy.get('.upVote').click();
        cy.get('.score').should("have.text", "5");

        for (let i = 0; i < 2; i++)
            cy.get('.downVote').click();
        cy.get('.score').should("have.text", "3");
    });
});
describe("Go to /top", () => {
    it("should visit /top", () => {
        cy.intercept("GET", "/recommendations/top/*").as("getTop");
        cy.contains("Top").click();
        cy.wait("@getTop");

        cy.url().should("equal", "http://localhost:3000/top");
    });
});
describe("Go to /random", () => {
    it("should visit the pages correctly", () => {
        cy.intercept("GET", "/recommendations/random").as("getRandom");
        cy.contains("Random").click();
        cy.wait("@getRandom");

        cy.url().should("equal", "http://localhost:3000/random");
    });
});
