// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

loginUserButton.addEventListener("click",(event)=>{
  event.preventDefault();
  console.log("hi");
  let user_name= loginUserUsername.value;
  let user_Password = loginUserPassword.value;
  let userObject = {
    username : user_name,
    password : user_Password,
  }
  LoginUser(userObject);
})
async function LoginUser(obj){
  try{
    let login_request = await fetch("http://localhost:9090/user/login",{
      method : "POST",
      body : JSON.stringify(obj),
      headers : {
        "Content-Type" : "application/json",
        

      },
     
    })
    
if(login_request.ok){
  alert("logged Inn");

  let token = await login_request.json();
  sessionStorage.setItem("access_token", token.accessToken)
  window.location.href=index.html;
}else{
  alert("user not found");
}

  } catch (error){
    alert("Bad Request");
  }

 
}