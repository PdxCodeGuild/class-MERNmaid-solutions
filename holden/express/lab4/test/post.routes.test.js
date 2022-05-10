const chai = require("chai");
const dotenv = require("dotenv");

const { app } = require("../server");
dotenv.config();

// .set("Authorization", `Bearer ${process.env.ADMIN_TOKEN}`)

describe("/post/ post.routes.js", () => {
  it("should disallow an unauthenticated user post", async () => {
    const response = await chai.request(app).post("/post/").send({
      title: "testpost1",
      content: "testcontent",
      board: process.env.BOARDID,
    });

    chai.expect(response.status).to.eq(401);
  });

  it("should allow an authenticated user post", async () => {
    const response = await chai.request(app).post("/post/").set("Authorization", `Bearer ${process.env.TOKEN}`).send({
      title: "testpost1",
      content: "testcontent",
      board: process.env.BOARDID,
    });

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.title).to.be.eq("testpost1");
    chai.expect(response.body.content).to.be.eq("testcontent");
    chai.expect(response.body._id).to.exist;
    const userPost = response.body._id;
  });

  it("should allow an authenticated user post", async () => {
    const response = await chai.request(app).post("/post/").set("Authorization", `Bearer ${process.env.TOKEN}`).send({
      title: "testpost1",
      content: "testcontent",
      board: process.env.BOARDID,
    });

    chai.expect(response.status).to.eq(200);
    chai.expect(response.body.title).to.be.eq("testpost1");
    chai.expect(response.body.content).to.be.eq("testcontent");
  });

});


// describe("/user/signup user.routes.js", () => {
//   it("Should allow a valid user to signup", async () => {
//     const response = await chai.request(app).post("/user/signup").send({
//       username: "Batman",
//       password: "Password123",
//       passwordCheck: "Password123",
//     });
//
//     chai.expect(response.body.username).to.be.eq("Batman");
//     chai.expect(response.body.password).to.not.exist;
//     chai.expect(response.status).to.be.eq(200);
//   });
//
//   it("Should not allow a user to signup if passwords do not match", async () => {
//     const response = await chai.request(app).post("/user/signup").send({
//       username: "Robin",
//       password: "Password123",
//       passwordCheck: "Password",
//     });
//
//     chai.expect(response.status).to.eq(401);
//   });
// });

// describe("/{boardName} user.routes.js", () => {
//   it("Should allow a user to visit their profile", async () => {
//     const response = await chai
//       .request(app)
//       .get("/")
//       .set("Authorization", `Bearer ${this.token}`);
//
//     chai.expect(response.status).to.eq(200);
//     chai.expect(response.body.username).to.be.eq("admin");
//     chai.expect(response.body.password).to.not.exist;
//   });
// });