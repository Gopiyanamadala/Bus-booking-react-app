const mongoose=require("mongoose");
const newSchema2=new mongoose.Schema({
    busno:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    starttime:{
        type:String,
        required:true
    },
    reachtime:{
        type:String,
        required:true
    },
    totalkm:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }


})
const collection2=mongoose.model("busdetails",newSchema2);
module.exports=collection2;