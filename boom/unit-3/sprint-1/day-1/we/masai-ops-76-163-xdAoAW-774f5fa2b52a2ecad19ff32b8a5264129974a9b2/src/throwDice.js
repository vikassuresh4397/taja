const memberA = () => {
  let x=Math.floor(((Math.random() * 10))%6 +1);
  document.getElementById("member-a").value=x;
  return x;
};

const memberB = () => {
  let x=Math.floor(((Math.random() * 10))%6 +1);
  document.getElementById("member-b").value=x;
  return x;
};

const memberC = () => {
  let x=Math.floor(((Math.random() * 10))%6 +1);
  document.getElementById("member-c").value=x;
  return x;
};

const findWinner = (val1, val2, val3) => {
  if(val1>val2 && val1>val3){
    document.getElementById('winner').innerHTML="The winner : Member A";
    document.querySelector("#member-a").style.background="green";
    if(val2>val3){
      document.querySelector("#member-b").style.background="yellow";
      document.querySelector("#member-c").style.background="red";
    }
    else if(val3>val2){
      document.querySelector("#member-b").style.background="red";
      document.querySelector("#member-c").style.background="yellow";
    }
    else{
      document.querySelector("#member-b").style.background="blue";
      document.querySelector("#member-c").style.background="blue";
    }

  }

  else if(val2>val1 && val2>val3){
    document.getElementById('winner').innerHTML="The winner : Member B";
    document.querySelector("#member-b").style.background="green";
    if(val1>val3){
      document.querySelector("#member-a").style.background="yellow";
      document.querySelector("#member-c").style.background="red";
    }
    else if(val3>val1){
      document.querySelector("#member-a").style.background="red";
      document.querySelector("#member-c").style.background="yellow";
    }
    else{
      document.querySelector("#member-a").style.background="blue";
      document.querySelector("#member-c").style.background="blue";
    }
  }

  else if(val3>val1 && val3>val2){
    document.getElementById('winner').innerHTML="The winner : Member C";
    document.querySelector("#member-c").style.background="green";
    if(val1>val2){
      document.querySelector("#member-a").style.background="yellow";
      document.querySelector("#member-b").style.background="red";
    }
    else if(val2>val1){
      document.querySelector("#member-a").style.background="red";
      document.querySelector("member-b").style.background="yellow";
    }
    else{
      document.querySelector("#member-a").style.background="blue";
      document.querySelector("#member-b").style.background="blue";
    }
  }

  else if(val1==val2 && val1>val3){
    document.getElementById("winner").innerHTML="It's a draw!";
    document.querySelector("#member-a").style.background="blue";
    document.querySelector("#member-b").style.background="blue";
    document.querySelector("#member-c").style.background="red";

  }

  else if(val2==val3 && val3>val1){
    document.getElementById("winner").innerHTML="It's a draw!";
    document.querySelector("#member-a").style.background="red";
    document.querySelector("#member-b").style.background="blue";
    document.querySelector("#member-c").style.background="red";

  }

  else if(val3==val1 && val1>val2){
    document.getElementById("winner").innerHTML="It's a draw!";
    document.querySelector("#member-a").style.background="blue";
    document.querySelector("#member-b").style.background="red";
    document.querySelector("#member-c").style.background="red";

  }

};

function fun(){
  let val1=memberA();
  let val2=memberB();
  let val3=memberC();
  findWinner(val1, val2, val3);
}



window.onload = function () {
  //  get the button here and add click event
  document.querySelector("#roll").addEventListener("click",fun)
};

// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    memberA,
    memberB,
    memberC,
    findWinner,
  };
}
