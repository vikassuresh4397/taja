const http = require('http');
const fs=require('fs');
const server = http.createServer((req, res) => {
 
    if(req.url==="/"){
      res.end("Home Page");
    }else if(req.url==="/reports"){
        res.setHeader("Content-type","text/html");
        res.end("<h1>Reports Page</h1>");
    }else if(req.url==="/users"){
        try{
            const data=fs.readFileSync("./db.json","utf-8")
            res.end(data);
        }catch{
            res.end("Error")
        }
       
    }else if(req.url==="/boom" && req.method==="POST"){
        let str="";
       req.on("data",(e)=>{
            str=str+e;
       })
       req.on("end",()=>{
        console.log("str",str)
       })
     
        res.end("New Blog details have been added")
       
    }
    else{
        res.end("Invalid");
    }


});

server.listen(8080,()=>{
    console.log("server is running at port 8080")
});

