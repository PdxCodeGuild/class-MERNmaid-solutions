const chai = require("chai");
const dotenv = require("dotenv");

const { app } = require("../server");
dotenv.config();

describe("/ board.routes.js", () => {
  it("should disallow a unauthenticated board creation", async () => {
    const response = await chai.request(app).post("/").send({
      boardName: "testboard1",
    });
    chai.expect(response.status).to.eq(401);
  });

  it("should disallow a non-admin board creation", async () => {
    const response = await chai.request(app).post("/").set("Authorization", `Bearer ${process.env.TOKEN}`).send({
      boardName: "testboard1",
    });
    chai.expect(response.status).to.eq(403);
  });

  it("should allow an admin board creation", async () => {
    const response = await chai.request(app).post("/").set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`).send({
      boardName: "testboard1",
    });

    this.boardID = response.body._id;
    chai.expect(response.status).to.eq(200);
  });

  it("should disallow duplicate board creation", async () => {
    const response = await chai.request(app).post("/").set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`).send({
      boardName: "testboard1",
    });

    chai.expect(response.status).to.eq(409);
  });
})

describe("/{boardName} board.routes.js", () => {
  it("should show a board", async () => {
    const response = await chai.request(app).get("/testboard1").send();

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.boardName).to.be.eq("testboard1");
    chai.expect(response.body.posts).to.exist;
  });

  it("should 404 a nonexistent board", async () => {
    const response = await chai.request(app).get("/nonexistentboard").send();

    chai.expect(response.status).to.eq(404);
  });

  it("should disallow nonauthenticated users from patching boards", async () => {
    const response = await chai.request(app).patch("/testboard1").send({
      boardName: "testboard2",
    });

    chai.expect(response.status).to.eq(401);
  });

  it("should disallow nonadmin users from patching boards", async () => {
    const response = await chai.request(app).patch("/testboard1").set("Authorization", `Bearer ${process.env.TOKEN}`).send({
      boardName: "testboard2",
    });

    chai.expect(response.status).to.eq(403);
  });

  it("should change the name of a board", async () => {
    const response = await chai.request(app).patch("/testboard1").set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`).send({
      boardName: "testboard2",
    });

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.boardName).to.be.eq("testboard2");
  });

  it("should show the board with a changed name", async () => {
    const response = await chai.request(app).get("/testboard2").send();

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.boardName).to.be.eq("testboard2");
    chai.expect(response.body.posts).to.exist;
  });

  it("should 404 a board with an old name", async () => {
    const response = await chai.request(app).get("/testboard1").send();

    chai.expect(response.status).to.eq(404);
  });

  it("should disallow nonauthenticated users from deleting boards", async () => {
    const response = await chai.request(app).delete("/testboard2").send();

    chai.expect(response.status).to.eq(401);
  });

  it("should disallow nonadmin users from deleting boards", async () => {
    const response = await chai.request(app).delete("/testboard2").set("Authorization", `Bearer ${process.env.TOKEN}`).send();

    chai.expect(response.status).to.eq(403);
  });

  it("should delete the board", async () => {
    const response = await chai.request(app).delete("/testboard2").set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`).send();

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.boardName).to.be.eq("testboard2");
  });

  it("should 404 a deleted board", async () => {
    const response = await chai.request(app).get("/testboard2").send();

    chai.expect(response.status).to.eq(404);
  });
});