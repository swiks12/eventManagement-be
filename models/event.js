const { array, required } = require("joi");
const mongoose=require("mongoose");


const eventSchema=new mongoose.Schema({
    name:{type:String,required:true},
    coordinates:{type:Array,required:true},
    address:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    statusVal:{type:String,default:"pending"},
    organizerId:{type:mongoose.Schema.Types.ObjectId}
});

const Event=mongoose.model("events",eventSchema);

module.exports=Event;