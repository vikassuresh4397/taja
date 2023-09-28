document.querySelector("form").addEventListener("submit",movieApply);
let movie_Arr=  JSON.parse(localStorage.getItem("movie-list")) || [];

function movieApply(event){
event.preventDefault();
let movieApplyObj={
    movie_name: document.querySelector("#name").value,
    actor_name: document.querySelector("#mainActor").value,
    movie_description: document.querySelector("#desc").value,
    movie_date: document.querySelector("#release").value,
    movie_category: document.querySelector("#category").value,
    ticket_price: document.querySelector("#price").value,
};

movie_Arr.push(movieApplyObj)

localStorage.setItem("movie-list", JSON.stringify(movie_Arr));


}
























































































