let buy=JSON.parse(localStorage.getItem("buy-list"))

displayTable1(buy);

function displayTable1(res){
    res.forEach(function (el){

        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=el.movie_name;
        let td2=document.createElement("td");
        td2.innerText=el.actor_name;
        let td3=document.createElement("td");
        td3.innerText=el.movie_description;
        let td4=document.createElement("td");
        td4.innerText=el.movie_date;
        let td5=document.createElement("td");
        td5.innerText=el.movie_category;
        let td6=document.createElement("td");
        td6.innerText=el.ticket_price;
       
        
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        
    });

}