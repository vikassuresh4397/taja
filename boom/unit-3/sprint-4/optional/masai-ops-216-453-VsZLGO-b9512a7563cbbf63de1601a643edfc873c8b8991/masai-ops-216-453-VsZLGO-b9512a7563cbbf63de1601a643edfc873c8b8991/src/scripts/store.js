let x=document.getElementById("mobile_list");

let data=JSON.parse(localStorage.getItem("mobile_data")) || [];

function gooo(res){
    x.innerHTML="";
    res.forEach(function(el,i){
      
        var tdiv=document.createElement("div");
        tdiv.setAttribute("class","mobile");
        var td1=document.createElement("img");
         td1.src=el.productimage;
         var td2=document.createElement("h1");
         td2.innerHTML=el.productname;
         var td3= document.createElement("p");
         td3.innerHTML=el.brandname;
         var td4= document.createElement("p");
         td4.innerHTML=+(el.productprice);
     
         var td5=document.createElement("button");
         td5.innerText="REMOVE";
         td5.setAttribute("class","remove");
        //  document.querySelector(".remove").addEventListener("click",function(el,i){
        //     remove(el,i);
        // })
         td5.addEventListener("click",function(el,i){
             remove(el,i);
         })
     console.log(document.querySelector(".mobile"));
     console.log("..........");
     console.log(tdiv);
     let y=document.querySelector(".mobile");
    //  document.querySelector(".mobile").append(td1,td2,td3,td4,td5);
    tdiv.append(td1,td2,td3,td4,td5);
    x.append(tdiv);
     });
     
}

gooo(data);

function remove(el,i){
    data.splice(i,1);
       localStorage.setItem("mobile_data",JSON.stringify(data));
       console.log(data);
       gooo(data);
       window.location.reload();
}
document.getElementById("sort_lth").addEventListener("click",sortlowtohigh);
document.getElementById("sort_htl").addEventListener("click",sorthightolow);
function sortlowtohigh(){
    data.sort(function(a,b){
        return (+a.productprice)-(+b.productprice);
    });
    gooo(data);
}

function sorthightolow(){
    data.sort(function(a,b){
        return (+b.productprice)-(+a.productprice);
    });
    gooo(data);
}

