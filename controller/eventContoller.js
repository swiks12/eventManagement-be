const cloudinary=require("../utils/cloudinary");

const Event=require("../models/event");


//new evet info
const createEvents=async(req,res)=>{   
    try {
        const result=await cloudinary.uploader.upload(req.body.image,{
            folder:"eventImages",
            // width:1200,
        })
        const newEvent=await Event.create({
            name:req.body.eventName,
            coordinates:req.body.coordinates,
            address:req.body.address,
            date:req.body.eventDate,
            time:req.body.time,
            price:req.body.price,
            description:req.body.description,
            image:{
                public_id:result.public_id,
                url:result.secure_url
            },
            organizerId:req.body.organizerId,
        });
        res.json({newEvent});
    } catch (error) {
        console.log(error);
    }
}



//get the particular events according to the organizer
const eventByOrgs=async(req,res)=>{
    
    try {
        const organizerId=req.params.id;
        if(!organizerId){
            return res.status(400).json({error:"organizer id is required"})
        }

        const eventByOrg=await Event.find({organizerId});
        res.json(eventByOrg);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error"});
    }
}

//update events
const updateEvents=async(req,res)=>{
    const result=await cloudinary.uploader.upload(req.body.image,{
        folder:"eventImages",});
    const updateEvent=Event.findByIdAndUpdate(req.params.id,{
        name:req.body.eventName,
        coordinates:req.body.coordinates,
        address:req.body.address,
        date:req.body.eventDate,
        time:req.body.time,
        price:req.body.price,
        description:req.body.description,
        image:{
            public_id:result.public_id,
            url:result.secure_url
        },
        organizerId:req.body.organizerId,
    });
    res.json("Event update successfull")
}




//DELETE EVENTS
const deleteEvents=async(req,res)=>{
    const deleteEvent=await Event.findByIdAndDelete(req.params.id);
    res.json({deleteEvent});
};

module.exports={createEvents,eventByOrgs,updateEvents,deleteEvents};