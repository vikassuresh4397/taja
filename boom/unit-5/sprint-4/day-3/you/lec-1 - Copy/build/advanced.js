let color = [255, 234, 245, 255];
let numStr = 10;
let obj = {
    name: "Vikas",
    age: 26,
    year: 1997,
};
let user1 = ["vikas", 26, 1997];
function getInfo(value) {
    return value;
}
getInfo(122);
getInfo(13123);
function getIno(value) {
    return value;
}
getIno(122);
getIno("13123");
getIno(true);
let obj2 = {
    name: "Vikas",
    age: 26,
    year: 1997,
    access: true,
    employee: "varun",
};
class Car {
    constructor(b, m) {
        this.brand = b;
        this.model = m;
    }
}
let c = new Car("Mahindra", 45);
class Suv extends Car {
    constructor(b, m, c) {
        super(b, m);
        this.color = c;
    }
}
//# sourceMappingURL=advanced.js.map