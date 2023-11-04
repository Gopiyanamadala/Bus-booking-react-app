const express=require("express")
const collection=require("./mongo")
const collection1=require("./coll2")
const collection2=require("./busdata")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json({em:email});
        }
        else{
            res.json("notexist")
            
        }

    }
    catch(e){
        res.json("notexist")
    }
})
app.post("/signup",async(req,res)=>{
    const{email,password,number}=req.body
    console.log(""+email);
    const data={
        email:email,
        password:password,
        number:number
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist");
            
        }
        else{
            res.json("notexist");
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("notexist")
    }
})
app.post("/seatlayout",async(req,res)=>{
    const{name,age,gender,mobile,seatNumber}=req.body;
    console.log(""+name+age+gender);
    res.json({mob:mobile});
    const data1={
        name:name,
        age:age,
        gender:gender,
        mobile:mobile,
        seatNumber:seatNumber
    }
collection1.insertMany([data1])
})
app.get("/busdetails",cors(),(req,res)=>{
})
app.post("/busdetails",async(req,res)=>{
    const{busno,source,destination,starttime,reachtime,totalkm,date}=req.body;
    console.log(""+busno);
    const data1={
        busno:busno,
        source:source,
        destination:destination,
        starttime:starttime,
        reachtime:reachtime,
        totalkm:totalkm,
        date:date
    }
collection2.insertMany([data1])
})
app.get("/seatlayout/:phoneNumber",cors(),async(req,res)=>{
    const phoneNumber = req.params.phoneNumber;
    console.log(phoneNumber);
  try {
    const user = await collection1.findOne({mobile:phoneNumber});
    if (user) {
      res.json(user);
      console.log(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }

})
app.delete('/seatlayout/:phoneNumber',cors(),async (req, res) => {
    const phoneNumber = req.params.phoneNumber;
    try {
        const result = await collection1.findOneAndRemove({mobile:phoneNumber});
        console.log(phoneNumber,result);
        if (result) {
          res.json({ message: 'User deleted successfully' });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
  });

app.listen(8000,()=>{
    console.log("port connected")
})