const Event=require("../models/event");
const {User}=require("../models/user")


const userEvents=async(req,res)=>{
    try {
        const userEvent=await Event.find({statusVal:"accepted"});
        res.json(userEvent)
    } catch (error) {
        res.status(500).json({error:"Server error"});
    }
}


//return a user
const users = async (req, res) => {
    try {
        const userId = req.params.userId; // Assuming the userId is passed as a URL parameter
        console.log(userId, 'userId');
        const user = await User.findById(userId);
        console.log(user);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};



module.exports={userEvents,users};