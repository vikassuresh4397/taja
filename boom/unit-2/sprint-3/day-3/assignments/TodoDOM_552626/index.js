document.querySelector("form").addEventListener("submit",myfunc);
function myfunc(e){
    e.preventDefault()
   let tname=document.getElementById("task").value;
   let tpriority=document.getElementById("priority").value;

   let trow=document.createElement("tr");
   trow.textContent=tname;
   let td1= document.createElement("td");
    td1.textContent=tpriority;
    let td2= document.createElement("td");
    td2.textContent="Delete";
    td2.addEventListener("click",myfunc1)
    trow.append(td1,td2)
    document.querySelector("tbody").append(trow)

}

function myfunc1(e){
e.target.parentNode.remove();
}
