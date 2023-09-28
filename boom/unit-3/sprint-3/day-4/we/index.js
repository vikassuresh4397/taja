let pr=JSON.parse(localStorage.getItem("amount"))||0;

function sumupMoney(){
    let amount= document.querySelector("#amount").value;
    rum=(+amount);
    pr+=rum;
    pr=+pr;
    localStorage.setItem("amount",JSON.stringify(pr));
    window.location.reload();
};
document.querySelector("#wallet").textContent=pr;
