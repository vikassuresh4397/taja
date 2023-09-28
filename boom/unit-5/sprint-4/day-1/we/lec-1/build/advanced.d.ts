type rgb = [number, number, number, number];
declare let color: rgb;
declare let numStr: number | string;
type user = [string, number, number];
declare let obj: {
    name: string;
    age: number;
    year: number;
};
declare let user1: user;
declare function getInfo(value: number): number;
declare function getIno<Type>(value: Type): Type;
interface user2 {
    name: "Vikas";
    age: 26;
    year: 1997;
}
interface Admin extends user2 {
    access: boolean;
    employee: string;
}
declare let obj2: Admin;
declare class Car {
    brand: string;
    model: number;
    constructor(b: string, m: number);
}
declare let c: Car;
declare class Suv extends Car {
    color: string;
    constructor(b: string, m: number, c: string);
}
