const timelogger=(req,res,next)=>{
    if(req.url==="/"){
      let startTime=new Date().getTime();
      console.log("startTime: " + startTime)
  next()
  let endTime=new Date().getTime();
  console.log("endTime: " + endTime)
  console.log("total time",endTime-startTime)
    }else{
      res.send("you dont have this route")
    }
  }

  module.exports ={timelogger}