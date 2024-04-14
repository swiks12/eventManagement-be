const Event=require("../models/event");


const userEvents=async(req,res)=>{
    try {
        const userEvent=await Event.find({statusVal:"accepted"});
        res.json(userEvent)
    } catch (error) {
        res.status(500).json({error:"Server error"});
    }
}

module.exports=userEvents;