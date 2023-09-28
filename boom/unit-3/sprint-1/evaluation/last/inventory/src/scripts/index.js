function redirect() {
  window.location = "inventory.html"
  }
  
  window.Onload=function(){
    document.querySelector("form").addEventListener("submit",getFormData)
  }
  
  function getFormData(e){
    e.preventDefault();
    let form=document.getElementById("product_form");
    let name=document.getElementById("product_name").value;
    let brand=document.getElementById("product_brand").value;
    let price=document.getElementById("product_price").value;
    let image=document.getElementById("product_image").value;
  
  
  
    // let name=form.product_name.value;
    // let brand=form.product_brand.value;
    // let price=form.product_price.value;
    // let image=form.product_image.ariaValueMax;
    addData(name, brand, price, image) 
  }
  
  function addData(name, brand, price, imageLink) {
   
   let data=JSON.parse(localStorage.getItem("data")) || [];
  
   let obj={
    name:name,
    brand:brand,
    price:price,
    image:imageLink,
   }
   data.push(obj);
   localStorage.setItem("data",JSON.stringify(data))
  }
  
  window.onload = function (){
  
  }
  
  if (typeof exports !== "undefined") {
    module.exports = {
      addData,
      redirect,
    };
  }