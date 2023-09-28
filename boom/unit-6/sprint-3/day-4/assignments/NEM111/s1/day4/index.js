const http=require("http");
const fs=require("fs");
const filePath = './example.txt';
const content = 'ghoom!';
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        try{
          let data=fs.readFileSync("./db.json","utf-8");
          let parsedData=JSON.parse(data);
          res.end(JSON.stringify(parsedData));
         
        }catch(err){
            console.log(err)
            res.end("Erorr")
        }
    }else if (req.url === "/boomryr"){
        fs.readFile("./db.json","utf-8",(err,data)=>{
          if(err){
            console.log("error");
            res.end("Error");
            return;
          }
          try{
            let parseData = JSON.parse(data);
            parseData.push("wow");
            const updatedData= JSON.stringify(parseData);
            fs.writeFile("./db.json",updatedData,"utf-8",(err)=>{
             if(err){
              res.end("error");
              
             }
             console.log("data Appended successfully")
             res.end("data Appended successfully")
            })
          }catch(err){
            res.end("Error");
            return;
          }

      

        })
      }
      
})

server.listen(3000,()=>{
    console.log("server listening on 3000")
})






