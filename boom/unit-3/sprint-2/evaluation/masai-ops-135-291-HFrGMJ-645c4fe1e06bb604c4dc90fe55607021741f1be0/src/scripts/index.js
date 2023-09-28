// The items should be stored in local storage with key :- “items”
// API :- https://mock-server-js.onrender.com/api/groceries

// async function showitem(){
//     let res= await fetch("https://mock-server-js.onrender.com/api/groceries");
//     let realdata =await res.json();
//     realdata = realdata.data;
//     let total =realdata.length;
//     displayitem(realdata)
//     document.querySelector("#count").innerText = total
// }
// showitem()

// let item=document.querySelector(#items);
// let cartArr = JSON.parse(localStorage.getItem('items')) || [];

// function displayitem(val){
//     item.innerHTML=null;

//     val.amp(function(ele){
// let box= document.createElement("div");
// box.classList = "item"    

// let image=document.createElement("img");
// image.src=ele.image;
// image.classList = "img";
// let name = document.createElement("p");
// name.innerText = '$(ele.price)'

// let btn =document.createElement("button");
// btn.innerText="Add to cart";
// btn.classList="add_to_cart";
// btn.addEventListener("click",function(){
//     cartArr.push(ele)
//     localStorage.setItem("items",JSON.stringify(cartArr))
// })
// box.append(image,name,price,btn)
// DataTransferItemList.append(box);

// })
// }

// // document.querySelector("#go_to_cart").addEventListener("click",function(){
// //     window.location.href="cart.html"
// // })

async function getstorageitems(){

    let items= await fetch("https://mock-server-js.onrender.com/api/groceries");
    let items_big= await items.json();
    let real_big=res_big.data;
    appendby(real_data);
    
}

getstorageitems();

function appendby(data){
    let bapu= document.querySelector("#items");
    data.forEach(function (el)){
        let div=document.createElementById("div");
        div.className = "item";
        let image=document.createElement("img");
        image.src = el.image;
        let name=document.createElement("p");
        name.innerHTML= el.name;
        let price=document.createElement("p");
        price.innerHTML = el.price;
        let button=document.createElement("button");
        button.className = "add_to_cart";
        button.innerText="Add to cart";
        button.addEventListener("click", function(){
        cartadd(e){
        });
        div.append(image,name,price,button);
        bapu.append(div);
       
    }
}

function cartadd(e){
    let gooditems=JSON.parse(localStorage.getItem("gooditems")) || [];
    items.push(el);


    localStorage.setItem("gooditems",JSON.stringify(gooditems));
    
}
