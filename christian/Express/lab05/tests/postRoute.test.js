const chai = require("chai");
const dotenv = require("dotenv");
const mocha = require("mocha")
const { getToken } = require("./test-helper")
const { createUser } = require("./test-helper")
const { createBoard } = require("./test-helper")
const jwtMiddleware = require("../helpers/jwtMiddleware");
const { app } = require("../server");
const chaiHttp = require("chai-http")
dotenv.config;
chai.use(chaiHttp)

//create post test
describe("/post/create postRoute.js", () => {
    it("Should allow a post to be created", async () => {
        const response  = await chai.request(app).post("/post/create").send({
            title: 'title',
            body: "body of post",
        });
        this.postId = response.body._id
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    });
    // retrieve post test
    it("should allow a post to be retrieved", async () => {
        const response = await chai.request(app)
        .get(`/post/retrieve/${this.postId}`)
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    });
    //update post test
    it("should allow a post to be updated", async () => {
        const response = await chai.request(app)
        .patch(`/post/update/${this.postId}`).send({
            name: "post name change",
            body: "post body change",

        });
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.exist;
    });
    it("should return list of posts", async () => {
        const response = await chai.request(app)
        .get('/post/list/')
        
        chai.expect(response.status).to.eq(200)
        chai.expect(response.body[0]._id).to.exist
        
    })
    //delete
    it("Should allow only verified users to delete their post", async () => {
        const token = await getToken()
        // const user = await createUser()
        // const board = await createBoard()
        console.log(token, "tokentoken")
        const response = await chai.request(app)
        .delete(`/post/delete/${this.postId}`)
        .set("Authorization", `Bearer ${token}`);
        console.log(response.body, "????")
        
        chai.expect(response.status).to.eq(200);
        chai.expect(response.body._id).to.not.exist;
    })
    
});


