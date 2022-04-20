const chai = require("chai");

const { app, connect } = require("../app");

describe("Board", () => {
  it("should return status code 200", async () => {
    const response = await chai.request(app).get("/board/");
    chai.expect(response.status).to.be.eq(200);
  });

  it("should return status code 404", async () => {
    const response = await chai.request(app).get("/board/notarealpage/");
    chai.expect(response.status).to.be.eq(404);
  });

  it("should return a board", async () => {
    const response = await chai.request(app).post("/board/").send({
      name: "Test",
    });
    chai.expect(response.body).to.exist;
  });
});