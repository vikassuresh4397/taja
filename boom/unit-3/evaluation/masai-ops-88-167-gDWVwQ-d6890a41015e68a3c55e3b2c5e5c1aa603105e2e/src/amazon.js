function Listing() {
  this.name=name;
  this.category=category;
  this.imageUrl=image;
  this.price=price;
  this.sold=sold || false;
  
}

function getFormData() {
  let name=document.querySelector("#name").value;
  let category=document.querySelector("#category").value;
  let image=document.querySelector("#image").value;
  let price=document.querySelector("#price").value;
  
  addListing(name,category,image,price);
}

function addListing(input, category, image, price, gender) {
  data=new Listing(input, category, image, price, gender);
  let arr=JSON.parse(localStorage.getItem("Products")) || [];
  arr.push(data);
  localStorage.setItem("Products",JSON.stringify(arr))
}

window.onload = function () {
  document.querySelector("#form").addEventListener("submit", function (event){
    event.preventDefault();
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
