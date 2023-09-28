let bo=document.getElementById("mobile_form")
bo.addEventListener("submit",wow);

let mobile_data=  JSON.parse(localStorage.getItem("mobile_data")) || [];

function wow(event){
    console.log("yes")
    event.preventDefault() 

let productname=document.getElementById("mobile_name").value;
let brandname=document.getElementById("mobile_brand").value;
let productprice=+(document.getElementById("mobile_price").value);
let productimage=document.getElementById("mobile_image").value;
let obj={productname,brandname,productprice,productimage};
mobile_data.push(obj);
console.log(mobile_data);
localStorage.setItem("mobile_data", JSON.stringify(mobile_data));

// localStorage.setItem("")
window.location.reload();
}