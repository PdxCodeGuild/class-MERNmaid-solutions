const mocha = require("mocha");
const chai = require("chai");
const dotenv = require("dotenv");

dotenv.config();


const { connectDataBase } = require("../server");

const testURL = process.env.DB_TEST


describe("server.js", () => {
    it("Should connect to a mongod server", async () => {
        const connection = await connectDataBase(testURL);
        // console.log("##############", connection)
        chai.expect(connection).to.exist;
    })
})