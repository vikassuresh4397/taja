const express=require('express');
const app = express();
const fs=require('fs');

app.use(express.json());


//query- http://localhost:3000/wo?q=Delhi
app.get("/wo",(req,res)=>{
    const {q}=req.query;
    console.log(q);
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let x=data.cities[0][q];
    if(data.cities[0][q]){
        res.send(`In ${q} the temp is ${x}`);
    }
    res.send(`not avilable`);
})

//param - http://localhost:3000/woooo/1
app.get("/woooo/:roll_no",(req,res)=>{
const {roll_no} = req.params;
console.log(roll_no);
res.send(roll_no);
})



app.listen(3000,()=>{
    console.log("3000")
});