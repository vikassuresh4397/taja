// Function constructor
function FourWheeler(w,m, c, s, f) {
    this.wheels=w;
    this.model=m;
    this.color=c;
    this.speed=s;
    this.fuel=f;
}


// Parent object fro Object.create
let FourWheelerObject = {
    wheels:"metal",
    model:"root",
    color:"vibgyor",
    speed:"50",
    fuel:"petrol",
    
}

Object.prototype.setSpeed=function(s){
    this.speed=s;
}
Object.prototype.updateColor=function(c){
    this.color=c;
}
Object.prototype.updateFuel=function(f){
    this.fuel=f;
}
FourWheelerObject.setSpeed()
FourWheelerObject.updateColor()
FourWheelerObject.updateFuel()
// Store function contructor object here
var car1 = new FourWheeler("silver","boom","red",100,"petrol")


// Store Object.create here
var car2 = new FourWheeler("silver","boom","red",100,"petrol")

export {car1, car2}