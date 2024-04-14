const Event=require("../models/event");


const getPendingEvents=async(req,res)=>{
    try {
        const getPendingEvent=await Event.find({statusVal:"pending"});
        res.json(getPendingEvent)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Server error"});
    }
}

module.exports=getPendingEvents;