const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");

const { connectDatabase } = require("../server");

chai.use(chaiHttp);
