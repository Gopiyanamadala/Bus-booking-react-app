const mongoose=require("mongoose");
const newSchema1=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    seatNumber:{
        type:Number,
        required:true
    }


})
const collection1=mongoose.model("passdetails",newSchema1);
module.exports=collection1;