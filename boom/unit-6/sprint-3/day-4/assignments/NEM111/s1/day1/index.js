// const isEven=require("is-even");
// console.log(isEven(6))

// const fs=require("fs");
// fs.readFile("./lecture.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// console.log(wow);
// console.log("yes")

const fs=require("fs");

// fs.writeFile("./lecture.txt","booom killer",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("data has been entered")
//     }
// })


try{
    fs.writeFileSync("./lecture.txt","booom killer2");
    console.log("updated")
}catch{
    console.log("error")
}

fs.appendFile("./lecture.txt","\nwhy me",(err)=>{
        if(err){
        console.log(err)
    }else{
        console.log("data has been added")
    }
})
