const {allOrganizerEvents,eventUserDetails}=require("../controller/ticketController");
const express=require("express");
const router=express.Router();

router.get("/paidEvents/:organizerId",allOrganizerEvents);
router.get("/eventUsers/:organizerId",eventUserDetails);



module.exports=router;