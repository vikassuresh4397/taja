const mongoose = require('mongoose');
const main=async ()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/otherdocs")
        console.log("connected to db");
        // await userModel.insertMany([{name:"vikas",age:22,city:"airoli"},{name:"vipin",age:26,city:"airolidfhfd"}]);
        const newthing= new userModel({
            name:"Tyagi pulkit",
            city:"airolidsvd",
            age:699
        },{
            versionKey:false
        })
        await newthing.save()
        const everydata=await userModel.find()
        console.log(everydata); 
        console.log("disconnecting from db");
        connection.disconnect();
    }catch(err){
        console.log(err)
    }
}

main();

const userSchema=mongoose.Schema({
    name:{type:String, required:true},
   city:{type:String, required:true},
    age:{type:Number, required:true},
})

const userModel=mongoose.model("user",userSchema);