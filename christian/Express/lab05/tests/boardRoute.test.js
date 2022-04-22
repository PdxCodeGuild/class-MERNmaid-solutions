const chai = require("chai");
const dotenv = require("dotenv");
const mocha = require("mocha")
const { app } = require("../server");
const chaiHttp = require("chai-http")
dotenv.config;
chai.use(chaiHttp)

describe("/board/create boardRoute.js", () => {
    it("Should allow a board to be created", async () => {
        const response = await chai.request(app).post("/board/create").send({
            name: "test board"
        });
        this.boardId = response.body.id
        
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body.name).to.exist;
         
    })
    //retreive board
    it("should allow a board to be retrieved", async () => {
        const response = await chai.request(app)
        .get(`/board/retrieve/${this.boardId}`)
        console.log(response,'BOARD')
        
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    })
    //update board still working on it
    it("should allow a board to be updated", async () => {
        const response = await chai.request(app)
        .patch(`/board/update/${this.boardId}`)
    })
})
