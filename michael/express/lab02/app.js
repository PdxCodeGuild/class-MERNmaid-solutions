const express = require("express");
const mongoose = require("mongoose");

const { SECRET_DB_URL } = require("./config/.env");
console.log(SECRET_DB_URL);

const app = express();

mongoose.connect(SECRET_DB_URL);
