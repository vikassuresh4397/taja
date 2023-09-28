const express =require("express");
const app=express();
const {connection}=require("./db");
app.use(cors());
require("dotenv").config();
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/note.routes")

app.use(express.json());
app.use("/users",userRouter)
app.use("/employees",noteRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection

        console.log(`Running at PORT ${process.env.PORT}`)
        console.log("Connected to db")
    }catch(e){
        console.log(e)
        console.log("Something went wrong")
    }
    
})