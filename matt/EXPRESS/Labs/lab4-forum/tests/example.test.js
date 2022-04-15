process.env.ENV = 'test'

const mocha = require("mocha");
const chai = require("chai")
const chaiHttp = require("chai-http")

const { app, connectDB } = require("../server");

chai.use(chaiHttp)

describe("General Route testing", () => {
    it("Should return a 404 status code", async () => {
        const response = await chai.request(app).get("/thispagedoesnotexist")
    
        chai.expect(response.status).to.be.eq(404)
    })
    
    // it("should be how you feel", async () => {
    //     console.log("You feel sadness")
    // })
    

})


describe("Auth", () => {
    before(async() => {
        await connectDB()
    })



    it("Should allow a valid user to sign up", async () => {
        const response = await chai.request(app).post("/auth/signup").send({
            username: "batman2",
            password: "password",
            passwordCheck: "password"
        })
    
        chai.expect(response.body.username).exist
        chai.expect(response.status).to.be.eq(200)
    })
})


// it("Should return a 200 status code", async () => {
//     const response = await chai.request(app).get("/board/")

//     console.log(response)
//     chai.expect(response.status).to.be.eq(200)
// })


