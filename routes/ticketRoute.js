const tickets=require("../controller/ticketController");
const express=require("express");
const router=express.Router();

router.post("/tickets",tickets);


module.exports=router;