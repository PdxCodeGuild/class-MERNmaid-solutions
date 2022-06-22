const { app } = require("../src/server");
const { signupUser, loginUser, validUser } = require("./auth.routes.test");

const createSqree = async (body, token) => {
  return await chai
  .request(app)
  .post("/sqree/")
  .send({body})
  .set("Authorization", `Bearer ${token}`)
}

describe("[POST] /sqree/", async () => {

  before( async () => {
    const response = await loginUser(validUser);
    this.token = response.body.token;
  });

  it("should create a sqree", async () => {
    const response = await createSqree("sqreeeeeeeee!", this.token)

    expect(response.body.body).to.eq("sqreeeeeeeee!");
    expect(response.status).to.eq(201);
  });

  it("should not create a sqree with empty body", async () => {
    const response = await createSqree("", this.token);

    expect(response.body.errors).to.exist;
    expect(response.body.body).to.not.exist;
    expect(response.status).to.eq(400);
  });

  it("should not create sqree without a user", async () => {
    const response = await createSqree("test sqree", undefined);

    expect(response.body.errors).to.exist;
    expect(response.body.body).to.not.exist;
    expect(response.status).to.eq(403);
  });
});
