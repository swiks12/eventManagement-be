const express=require("express");
const router=express.Router();


const {userEvents,users}=require("../controller/userController");

router.get("/userEvents",userEvents);
router.get("/userDetails/:userId",users);


module.exports=router;