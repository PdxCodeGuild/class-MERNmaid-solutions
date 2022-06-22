const chai = require("chai");

const { expect } = chai

describe("This is a test of my tests", () => {
    it("shoudl connect to the database", () => {
        chai.expect(true).to.eq(true);
    })
})