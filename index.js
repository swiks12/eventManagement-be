require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser'); // Import body-parser
const cors = require("cors");
const connection = require("./db");

const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const verifyandGetvalueRoute = require("./routes/tokenVerify");
const eventRoutes = require("./routes/eventRoute");
const adminRoutes=require("./routes/admin");
const userDetails=require("./routes/userEvents");
const paidOrgEventRoutes=require("./routes/ticketRoute");
const stripeRoute=require("./routes/stripe-route");


connection();

const app = express();

// Use body-parser middleware
app.use(bodyParser.json({ limit: '10mb' })); // JSON data limit set to 10MB
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // URL-encoded data limit set to 10MB

app.use(cors());

app.use("/api/login", userRoutes);
app.use("/api/signup", authRoutes);
app.use("/api/tokenVerify", verifyandGetvalueRoute);
app.use("/api/events", eventRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/user",userDetails);
app.use("/api",paidOrgEventRoutes);
app.use("/api",stripeRoute);





const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
