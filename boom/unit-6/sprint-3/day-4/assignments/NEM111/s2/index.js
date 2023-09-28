const express=require('express');
const app=express();
app.use(express.json());
const fs=require('fs');
app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/add/post",(req,res)=>{
let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
const newUser=req.body;
data.users.push(newUser);

fs.writeFileSync("./db.json",JSON.stringify(data))
console.log(data);
res.send("added")
})


app.listen(8080,()=>{
    console.log("8080 running")
})