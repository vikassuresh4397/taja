document.querySelector("form").addEventListener("submit",todo);

function todo(event){
    event.preventDefault();
    let comp_name = document.querySelector("#compName").value;
    let comp_priority = document.querySelector("#listedExchange").value;
    let comp_industry = document.querySelector("#industry").value;
    let comp_stockprice = document.querySelector("#stockPrice").value;
    let comp_buyingqty = document.querySelector("#quantity").value;
    let comp_type = document.querySelector("#type").value;
    console.log(comp_name,comp_priority, comp_industry,comp_stockprice,comp_buyingqty,comp_type);
   
    let tRow= document.createElement("tr");
   
    let td1= document.createElement("td");
    td1.innerText=comp_name;
   
    let td2= document.createElement("td");
    td2.innerText=comp_priority;
    let td3= document.createElement("td");
    td3.innerText=comp_industry;
    let td4= document.createElement("td");
    td4.innerText=comp_stockprice;
    let td5= document.createElement("td");
    td5.innerText=comp_buyingqty;
    let td6= document.createElement("td");
    td6.innerText=comp_type;
    let td7= document.createElement("td");
    td7.innerText=+(+(td5.innerText)*(+(td4.innerText)));
    let td8= document.createElement("td");
    td8.innerText="16/09/2022";
    let td9= document.createElement("td");
    td9.innerText="Sell"
    td9.style.backgroundColor = "red";
    td9.style.color="yellow";
    td9.addEventListener("click",deleteTodo);
    

    tRow.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);

    document.querySelector("tbody").append(tRow);
    
}

function deleteTodo(event){
console.log(event.target.parentNode);
event.target.parentNode.remove();

}
