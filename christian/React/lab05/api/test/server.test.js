const { expect } = require("chai");
const { connectDatabase } = require("../src/server");

describe("connectDatabase", () => {
    it("Should connect to a mongoDB server", async () => {
        const connection = await connectDatabase("test-db")
        expect(connection).to.exist
    })
})