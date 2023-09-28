

let appliedmoviebooking= JSON.parse(localStorage.getItem("movie-list")) || [];
let myBookmarkArr=JSON.parse(localStorage.getItem("buy-list")) || [];



document.querySelector("#filter").addEventListener("change",handlecategory);


function handlecategory(){
    let selected =document.querySelector("#filter").value;
    console.log(selected);
    if(selected=="Fiction"){
        appliedmoviebooking.sort(function(a,b){
            return a.ticket_price-b.ticket_price;
        })
        displayTable(appliedmoviebooking)
    }else if(selected=="Action"){
        appliedmoviebooking.sort(function(a,b){
            return a.ticket_price-b.ticket_price;
        })
        displayTable(appliedmoviebooking)
    }else if(selected=="Comedy"){
        appliedmoviebooking.sort(function(a,b){
            return a.ticket_price-b.ticket_price;
        })
        displayTable(appliedmoviebooking)
    }
}




// console.log(appliedmoviebooking);
displayTable(appliedmoviebooking);

function displayTable(res){
    document.querySelector("tbody").innerHTML="";
    let count=0;
    res.forEach(function (el,i){
       count++;
      
    document.getElementById("movie-count").innerText=count;
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
        let td7=document.createElement("td");
        td7.innerText="Buy";
        td7.style.color="white"
        td7.style.backgroundColor="green"
        td7.addEventListener("click",function(event){
            myBookmark(el);
            event.target.parentNode.remove();
            deleteBookmark(i);
        })
        
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
        
    });

}

function myBookmark(el){
    console.log(el);
    myBookmarkArr.push(el);
    localStorage.setItem("buy-list", JSON.stringify(myBookmarkArr));
    
}

function deleteBookmark(i){
    myBookmarkArr.splice(i,2);
    console.log(myBookmarkArr);
    count--;
      
    document.getElementById("movie-count").innerText=count;
    localStorage.setItem("movie-list", JSON.stringify(myBookmarkArr));
}


