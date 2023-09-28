const fs= require('fs');

const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url=="/"){
    res.end("booooom")
}else if(req.url=="/boom"){
    fs.writeFile('./faki.txt', "wowowoo", err => {
        if (err) {
          console.error(err);
        }else{
            console.log("Boom done")
        }

      });
}
})



server.listen(4500);