require('dotenv').config();
const express = require("express");

const app = express();
const cors=require("cors");
const connection=require("./db");

const userRoutes=require("./routes/user");
const authRoutes=require("./routes/auth");

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
connection();

//middlewares

app.use(express.json());
app.use(cors());

app.use("/api/login",userRoutes);
app.use("/api/signup",authRoutes);


const port= process.env.PORT ||8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});