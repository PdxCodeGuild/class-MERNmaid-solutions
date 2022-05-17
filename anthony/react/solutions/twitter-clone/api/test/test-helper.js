const mocha = require("mocha")
const chai = require("chai")
const chaiHttp = require("chai-http")
const dotenv = require("dotenv")
const path = require("path")
const { connectDatabase } = require("../src/server")

chai.use(chaiHttp)

global.chai = chai
global.expect = chai.expect

setTimeout(() => {
  before(async () => {
    global.db = await connectDatabase("test-db")
  })

  after(async () => {
    await db.connection.dropDatabase()
    await db.connection.close()
  })
})