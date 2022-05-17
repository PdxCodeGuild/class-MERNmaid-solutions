const { app } = require("../src/server")


const validUser = {
  username: "testUser",
  email: "test@mail.com",
  password: "password123",
  confirmPassword: "password123"
}

const signupUser = async (user = validUser) => {
  return await chai.request(app).post("/auth/signup").send(user)
}

describe("[POST] /auth/signup", () => {
  it("Should allow a valid user to signup", async () => {
    const response = await signupUser()

    expect(response.body.username).to.eq(validUser.username)
    expect(response.body.email).to.eq(validUser.email)
    expect(response.body.password).to.not.exist
    expect(response.status).to.be.eq(200)
  })

  it("Should not allow non matching passwords to signup", async () => {
    const response = await signupUser({
      ...validUser,
      username: "fakeuser",
      confirmPassword: "password"
    })

    expect(response.status).to.eq(400)
    expect(response.body.errors).to.exist
  })
})