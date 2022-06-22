const { expect } = require("chai");
const { connectDatabase } = require("../src/server");

describe("connectDatabase", () => {
  it("should connect to mongodb", async () => {
    const connection = await connectDatabase("test-db");

    expect(connection).to.exist;
  })
})
