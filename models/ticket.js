const mongoose=require("mongoose");

const ticketSchema=new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,
    required:true},
    eventId:{type:mongoose.Schema.Types.ObjectId,
    required:true},
})



const Ticket=mongoose.model("tickets",ticketSchema);


module.exports=Ticket;