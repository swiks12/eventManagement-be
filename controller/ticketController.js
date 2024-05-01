
const Ticket=require("../models/ticket");


const tickets=async(req,res)=>{

    try {
        const ticket=await Ticket.create({
            userId:req.body.userId,
            eventId:req.body.eventId,
        })
        res.json(ticket)
        
    } catch (error) {
       res.status(500).json({error:'server error'});
    }

}


module.exports=tickets;