const express=require("express");
const router=express.Router();


const userEvents=require("../controller/userController");

router.get("/userEvents",userEvents);

module.exports=router;