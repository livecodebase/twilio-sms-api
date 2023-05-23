const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const product = require("./api/message");

app.use("/api/messages", product);

app.use('/', express.static('build'))
const PORT = process.env.PORT || 8080;
app.listen(PORT)
