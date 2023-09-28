const fs= require('fs');

const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("booooom")
}
});

server.listen(4500);