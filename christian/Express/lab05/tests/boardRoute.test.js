const chai = require("chai");
const dotenv = require("dotenv");
const mocha = require("mocha")
const { getToken } = require("./test-helper")
const jwtMiddleware = require("../helpers/jwtMiddleware");
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
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    })
    //update board still working on it
    it("should allow a board to be updated", async () => {
        const response = await chai.request(app)
        .patch(`/board/update/${this.boardId}`).send({
            name: "board name change"
        });
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
        
    });
   //delete board test
    it("Should allow only verified users to delete their board", async () => {
        const token = await getToken()
        const response = await chai.request(app)
        .delete(`/board/delete/${this.boardId}`)
        .set("Authorization", `Bearer ${token}`);
        
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    });
    //list board test
    it("Should allow posts to be listed", async () => {
        const response = await chai.request(app)
        .get(`/board/list/${this.boardId}`)

        chai.expect(response.status).to.eq(200)
        chai.expect(response.body._id).to.exist;
    })
});
