// import fetch from "isomorphic-fetch";


let data=[{id:1,brand:"Zebronics",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfboat000113_1_cc965b26.jpg?rnd=20200526195200",price:100,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Laptop"},{id:2,brand:"Zebronics",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfblta000011_1.jpg?rnd=20200526195200",price:120,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Mobile"},{id:3,brand:"Zebronics",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/c/bc60a_1_c82d81cb.jpg?rnd=20200526195200",price:130,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Head_Phones"},{id:4,brand:"Zebronics",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/6/1/619660798426_1_727221ba.jpg?rnd=20200526195200",price:100,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Speakers"},{id:5,brand:"Zebronics",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/_/c_8907605107849_1_655fcbdf.jpg?rnd=20200526195200",price:200,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Smart_TV"},{id:6,brand:"Apple",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/o/cor-nyfcrca000039_1_369033fe.jpg?rnd=20200526195200",price:235,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Laptop"},{id:7,brand:"Apple",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/m/ambrane_8904258106557_1_aff3c266.jpg?rnd=20200526195200",price:250,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Mobile"},{id:8,brand:"Apple",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/y/nyfblta000009_1.jpg?rnd=20200526195200",price:100,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Head_Phones"},{id:9,brand:"Apple",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/z/b/zb_8906108615899_1_44867a4c.jpg?rnd=20200526195200",price:325,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Speakers"},{id:10,brand:"Apple",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/u/d/ud_bk_1_2f275806.jpg?rnd=20200526195200",price:350,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Smart_TV"},{id:11,brand:"HP",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/r/grey_1_398b5873.jpg?rnd=20200526195200",price:375,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Laptop"},{id:12,brand:"HP",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/o/boult-audio-ba-nk-freepods-black_1_17c2dc71.jpg?rnd=20200526195200",price:100,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Mobile"},{id:13,brand:"HP",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/i/dive_green_1.jpg?rnd=20200526195200",price:500,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Head_Phones"},{id:14,brand:"HP",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/e/pebble-8906086572115_1_34a9b9fd.jpg?rnd=20200526195200",price:1000,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Speakers"},{id:15,brand:"HP",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/p/pportronics-por-1195_1_e9dc8e9f.jpg?rnd=20200526195200",price:750,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Smart_TV"},{id:16,brand:"Dell",img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/u/musebud_grey.jpg?rnd=20200526195200",price:1500,details:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",category:"Laptop"}];

console.log(data);
let app=document.getElementById("app");

function getAsCard(img,title,price,description){
  ret
}

// 1.
// the following function getProducts() should return a promise that
// resolves to product items
// request url: https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products
// hint1: whatever you return from an async function is a promise that resolves to the value that you return
// hint2: the actual array that we need may be nested within response json. for example {data: [...]}
async function getProducts() {
 // 1. your code here.
}

// getProducts().then((data) => console.log(JSON.stringify(data, null, 2)));

// 2.
// the function getProductsSortedByPrice should return a promise that
// resolves to all products sorted by price in ascending order (low to high)
// use the getProducts() function here to fetch all products

async function getProductsSortedByPrice() {
 // 2. your code here.
}

// getProductsSortedByPrice().then((data) =>
//   console.log(JSON.stringify(data, null, 2))
// );

// 3.
// the getWellFormattedData() should return a promise that
// resolves to an object with `brand` as keys and an `array of product ids` as value.
// for example, if product 6,7,8,9 & 10 band is Apple, the property Apple would look like
// Apple: [6,7,8,9,10],
// Example result:
/*
  {
    Zebronics: [1,2,3,4,5],
    Apple: [6,7,8,9,10],
    HP: [11,12,13,14,15],
    Dell: [16]
  }
*/
// use the getProducts() function here to fetch all products
// hint: we are changing the shape/structure of the original array
// hint: we are reducing an array down to an object.

async function getWellFormattedData() {
 // 3. your code here.
}

// getWellFormattedData().then((data) => console.log(JSON.stringify(data)));

export { getProducts, getProductsSortedByPrice, getWellFormattedData };
