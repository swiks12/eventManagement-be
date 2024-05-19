const paidOrgEventRoutes=require("../controller/ticketController");
const express=require("express");
const router=express.Router();

router.get("/paidEvents/:organizerId",paidOrgEventRoutes);


module.exports=router;