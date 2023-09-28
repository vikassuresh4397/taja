const fs=require('fs');
const logger=(req,res,next)=>{
fs.appendFileSync("./logs.text",` API Endpoints: ${req.url} | Method: ${req.method} | Timestamp: ${Date()}\n`);
next();
}

module.exports={logger}