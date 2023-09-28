document.querySelector("form").addEventListener("submit",myfunc);

function myfunc (event){
    event.preventDefault();
    let tname= document.getElementById("name").value;
    let temployeeid=document.getElementById("employeeID").value;
    let tdepartment= document.getElementById("department").value;
    let texperience= document.getElementById("exp").value;
    let temail= document.getElementById("email").value;
    let tmobile=document.getElementById("mbl").value;
    let trole= document.getElementById("mbl").value;
    // console.log(tname,temployeeid,tdepartment,texperience,temail,tmobile);
    let trow= document.createElement("tr");
    let td1= document.createElement("td");
    td1.innerText= tname;
    let td2= document.createElement("td");
    td2.innerText= temployeeid;
    let td3= document.createElement("td");
    td3.innerText= tdepartment;
    let td4= document.createElement("td");
    td4.innerText= texperience;
    let td5= document.createElement("td");
    td5.innerText= temail;
    let td6= document.createElement("td");
    td6.innerText= tmobile;
    let td7= document.createElement("td");
    td7.innerText= trole;
    let td8= document.createElement("td");
    td8.innerText= "delete";
    td8.addEventListener("click",myfunc2)
    
    trow.append(td1,td2,td3,td4,td5,td6,td7,td8);

    document.querySelector("tbody").append(trow);
    
}

function myfunc2(e){
e.target.parentNode.remove();
}

