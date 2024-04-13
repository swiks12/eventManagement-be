const express=require("express");
const router=express.Router();
const {createEvents,eventByOrgs,updateEvents,deleteEvents}=require("../controller/eventContoller")



router.get('/getEvents/:id',eventByOrgs);
router.post('/add',createEvents);
router.put('/update/:id',updateEvents);
router.delete('/delete/:id',deleteEvents);


module.exports=router;