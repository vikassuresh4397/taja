type rgb =[number,number,number,number];
let color:rgb=[255,234,245,255];
let numStr:number|string=10;

type user =[string,number,number];

let obj={
    name:"Vikas",
    age:26,
    year:1997,
};

let user1 : user=["vikas",26,1997];

function getInfo(value:number){
    return value;
}

getInfo(122);
getInfo(13123);

function getIno<Type>(value:Type){
    return value;
}

getIno<number>(122);
getIno<string>("13123");
getIno<boolean>(true);

interface user2{
    name:"Vikas";
    age:26;
    year:1997;
}

interface Admin extends user2{
    access:boolean;
    employee:string;
}

let obj2:Admin={
    name:"Vikas",
    age:26,
    year:1997,
    access:true,
    employee:"varun",
}

class Car{
    brand:string;
    model:number;
    constructor(b:string,m:number){
        this.brand=b;
        this.model=m;
    }
}

let c=new Car("Mahindra",45)

class Suv extends Car{
    color:string;
    constructor(b:string,m:number,c:string){
        super(b,m);
        this.color=c;
    }
}