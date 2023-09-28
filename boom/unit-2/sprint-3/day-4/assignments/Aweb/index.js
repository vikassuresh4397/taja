document.querySelector("form").addEventListener("submit",myfunc);

function myfunc(e){
    e.preventDefault();
   let tname=document.getElementById("name").value;
   let tid=document.getElementById("docID").value;
   let tspec=document.getElementById("dept").value;
   let texp=document.getElementById("exp").value;
   let temail=document.getElementById("email").value;
   let tmbl=document.getElementById("mbl").value;
   
   let trow=document.createElement("tr");
   
   let td1=document.createElement("td");
   td1.textContent=tname;
   let td2=document.createElement("td");
   td2.textContent=tid;
   let td3=document.createElement("td");
   td3.textContent=tspec;
   let td4=document.createElement("td");
   td4.textContent=texp;
   let td5=document.createElement("td");
   td5.textContent=temail;
   let td6=document.createElement("td");
   td6.textContent=tmbl;
   let td7=document.createElement("td");
   if(td4.textContent<=1){
    td7.textContent="trainee"
   }else if(td4.textContent>=2&&td4.textContent<=5){
    td7.textContent="junior"
   }else{
    td7.textContent="senior"
   }
   let td8=document.createElement("td");
   td8.textContent="delete";
   td8.addEventListener("click",myfunc2);

   trow.append(td1,td2,td3,td4,td5,td6,td7,td8);
   document.querySelector("tbody").append(trow);

}

function myfunc2(e){
e.target.parentNode.remove();
}