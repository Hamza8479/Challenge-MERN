const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.set("view engine", "ejs"); npm i ejs when you want to add html so u can create file hello.ejs to use html
app.use("/api/", require("./routes/hello"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
