//store the products array in localstorage as "data"

import { arrayBuffer } from "stream/consumers";

function redirectToInventoryPage() {

}

function getFormData(e) {
  e.preventDefault();
  let form = document.getElementById("product_form");
  let name=form.product_name.value;
  let brand=form.product_brand.value;
  let price=form.product_price.value;
  let image=form.product_image.value;
  addData(name, brand, price, image)
  
}

function addData(name, brand, price, image) {
  let arr=JSON.parse(localStorage.getItem("data"))||[];
  let obj={
    name:name,
    brand:brand,
    price:price,
    image:image,
  }
  arr.push(obj);
  localStorage.setItem("data",JSON.stringify(arr));
}

window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners
  document.getElementById("show_products").addEventListener("click",getFormData)

});
