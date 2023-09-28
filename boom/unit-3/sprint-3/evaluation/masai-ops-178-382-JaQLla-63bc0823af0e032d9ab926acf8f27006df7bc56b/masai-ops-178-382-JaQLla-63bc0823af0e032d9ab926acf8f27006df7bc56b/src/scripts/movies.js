// async function searchMovies(){
//     let nameofmovie=document.querySelector("#search").value;
//     try{
//         let response = await fetch('https://www.omdbapi.com/?s=${searchquery}&page=1&apikey= nameofmovie');

// import { moveEmitHelpers } from "typescript";

// import { createJsxJsxClosingFragment } from "typescript";
async function deb(){
    let searchquery=document.getElementById("search").value;
    
    try{
        let res=await fetch(`https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=4ce57ca0`)
        // let res=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=4ce57ca0`)
        let data=await res.json();
        let actdata=data.Search;
        console.log(actdata);
        appendmov(actdata);
    }
    catch(error){
        console.log("error",error)
    }
}


function appendmov(cnt){
    let m_div=document.querySelector("#movies");
    cnt.forEach(function(el){
        let div=document.createElement("div");
        let timg=document.createElement("img");
        let tname=document.createElement("p");
        let btn= document.createElement("button");

        timg.src=cnt.Poster;
        tname.innerText=cnt.Title;
        btn.innerText='Book';
        btn.setAttribute("class","book_now");
        btn.addEventListener("click",function(){
           wind(el)

        })

        div.append(timg,tname,btn);
        m_div.append(div);
    })
}

function wind(el){
localStorage.setItem("boom",JSON.stringify(el));
window.location.href="checkout.html"
}

let i;
function movie(l,m){
    if(i){
        clearTimeout(i)
    }

    i=setTimeout(function (){
        l()
    },m)
}
    let vot=JSON.parse(localStorage.getItem("amount"));
    document.querySelector("#wallet").innerText=vot;
//     let deta=await response.json();
//     let actdeta=deta.Search;
//     appendMovies(actdeta);
// }

// catch(err){
//     console.log('err',err)
// }
// }

// function appendMovies(deta){
//     let divmovie=document.querySelector("#movies");
//     divmovie.innerHTML=null;

//  deta.forEach(function(el){
//     let div=document.createElement("div");
//     div.className="movie_tab"

//     let timg=document.createElement("img");
//     timg.src=el.Poster;

//     let tname=document.createElement("p");
//     tname.innerText=el.Title;

//     let btn= document.createElement("button");
//      btn.innerText="Book now";

//     btn.className="book_now";

//     divmovie.append(div);

//  })

// }

// function debouncing(func,delay){
//     if(timerID){
//         clearTimeout(timerID);
//     }
//     timerID=setInterval(function(){
//         func();
//     },delay)
// }

