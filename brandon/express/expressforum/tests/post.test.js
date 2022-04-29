const chai = require("chai");

const { app } = require("../app");

describe("Post", () => {
  it("should return status code 200", async () => {
    const response = await chai.request(app).get("/post/");
    chai.expect(response.status).to.be.eq(200);
  });

  it("should return status code 404", async () => {
    const response = await chai.request(app).get("/post/notarealpage/");
    chai.expect(response.status).to.be.eq(404);
  });

  it("should return a post", async () => {
    const response = await chai.request(app).post("/post/").send({
      title: "Test",
      body: "testing",
    });
    chai.expect(response.body).to.exist;
  });
});


