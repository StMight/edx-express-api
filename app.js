const express = require("express");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");

const router = require("./routes/index.js");

let app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(errorHandler());

router(app);

app.listen(3000);