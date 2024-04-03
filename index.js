require('dotenv').config();
const express = require("express");

const app = express();
const cors=require("cors");
const connection=require("./db");

const userRoutes=require("./routes/user");
const authRoutes=require("./routes/auth");


connection();

//middlewares

app.use(express.json());
app.use(cors());

app.use("/api/users",userRoutes);//signup
app.use("/api/auth",authRoutes);//login


const port= process.env.PORT ||8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});