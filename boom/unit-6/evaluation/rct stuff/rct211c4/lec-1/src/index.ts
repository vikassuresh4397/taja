let n:number=10;
// n="a";
n=5;

let s: string = "ABC";
s="CDEd"

let b:boolean = false;
b=true;

let arr: number[]=[1,2,3,4,5];
let brr: Array<number> = [1,2,3,4];
let arrStr: string[] =["a","b","2"];
arrStr.push("gd");

type userObj={name:string;id:string;score:number;address:string};

let user:userObj={
    name:"dsgs",
    id:"dgss",
    address:"MG Street",
    score:3,
}

let user2:userObj={
    name:"dsgs",
    id:"dgss",
    address:"MG Street",
    score:3,
}

let dataBase:Array<userObj>=[];

type newObj={images:string[]}
let imageDb: newObj={
    images:["images1","images2"]
}

let numStr :number|string|boolean=123;
numStr=true;

let rer:any="dbsd";
rer=5;
type boom ={name:string,score:number,address:string,status?:boolean};
type admin={name:string,role:string}

const is: boom & admin={
    name:"vikas",
    score:9,
    address:"fwefwe",
    // status:true,
    role:"bE"
}

function sum(a:number,b?:number){
   return a;
}

sum(10)

export default {}