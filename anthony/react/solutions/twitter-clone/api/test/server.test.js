const { connectDatabase } = require("../src/server")

describe("connectDatabase", () => {
  it("Should connect to a mongodb server", async () => {
    const connection = await connectDatabase("test-db")

    expect(connection).to.exist
  })
})