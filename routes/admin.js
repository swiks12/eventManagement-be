const express=require("express");
const router=express.Router();
const getPendingEvents=require("../controller/adminController");


router.get("/pendingEvents",getPendingEvents);


module.exports=router;