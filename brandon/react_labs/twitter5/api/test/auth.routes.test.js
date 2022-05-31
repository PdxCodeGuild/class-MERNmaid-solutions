const { app } = require("../src/server");
const jwt = require("jsonwebtoken");
const { expect } = require("chai");

const validUser = {
  username: "testUser",
  email: "test@email.com",
  password: "testPassword",
  confirmPassword: "testPassword"
}

const signupUser = async (user=validUser) => {
  return await chai.request(app).post("/auth/signup").send(user);
}

const loginUser = async (user = validUser) => {
  return await chai.request(app).post("/auth/login").send(user)
}

describe("[POST] /auth/signup", () => {
  it("should allow a valid user to signup", async () => {
    const response = await signupUser();

    expect(response.body.username).to.eq(validUser.username);
    expect(response.body.email).to.eq(validUser.email);
    expect(response.body.password).to.not.exist;
    expect(response.status).to.eq(200);
  });

  it("should not allow an invalid user to signup", async () => {
    const response = await signupUser({
      ...validUser,
      username: "testUserToo",
      confirmPassword: undefined
    });

    expect(response.status).to.eq(400);
    expect(response.body.errors).to.exist;
  })

});

describe("[POST] /auth/login", () => {
  it("should log in a valid user", async () => {
    const response = await loginUser();
    expect(response.status).to.eq(200);
    expect(response.body.token).to.exist;

    const user = jwt.verify(response.body.token, process.env.SECRET_KEY);
    expect(user.username).to.eq(validUser.username);
    expect(user.password).to.not.exist;
  });

  it("should not allow login with invalid username", async () => {
    const response = await loginUser({
      ...validUser,
      username: "doesnotexist"
    });

    expect(response.body.errors).to.exist;
    expect(response.body.token).to.not.exist;
    expect(response.status).to.eq(401);
  });

  it("should not allow login with invalid password", async () => {
    const response = await loginUser({
      ...validUser,
      password: "password"
    });

    expect(response.body.errors).to.exist;
    expect(response.body.token).to.not.exist;
    expect(response.status).to.eq(401);
  });
});

module.exports = {
  signupUser,
  loginUser,
  validUser
}
