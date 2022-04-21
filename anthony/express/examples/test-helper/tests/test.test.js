const chai = require("chai");

const { expect } = chai;

describe("This is a test of my tests", () => {
  it("Should connect to the test database", () => {
    expect(true).to.eq(true);
  });
});
