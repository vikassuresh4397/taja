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

loginUserButton.addEventListener("click", async () => {
  const username = loginUserUsername.value;
  const password = loginUserPassword.value;

  try {
    const response = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const accessToken = data.accessToken;
      const user = data.user;

      userAuthToken = accessToken;
      userId = user.id;
      localStorage.setItem("localAccessToken", accessToken);
      localStorage.setItem("userId", user.id);

      notificationWrapper.innerHTML = `
        <h5 class="notification info">
          hey ${user.username}, welcome back!
        </h5>
      `;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error(error);
  }
});

getTodoButton.addEventListener("click", async () => {
  try {
    const response = await fetch(urlAllTodosOfUser, {
      headers: {
        Authorization: `Bearer ${userAuthToken}`,
      },
    });

    if (response.ok) {
      const todos = await response.json();
      let todoListHTML = "";

      todos.forEach((todo) => {
        const { id, title, completed } = todo;
        const checkedAttribute = completed ? "checked" : "";

        todoListHTML += `
          <label>
            <input class="todo-item-checkbox" data-id="${id}" type="checkbox" ${checkedAttribute}>
            ${title}
          </label>
        `;
      });

      mainSection.innerHTML = `
        <div id="todo-list-wrapper" class="todo-list-wrapper">
          ${todoListHTML}
        </div>
      `;
    } else {
      throw new Error("Failed to fetch todos");
    }
  } catch (error) {
    console.error(error);
  }
});

mainSection.addEventListener("change", async (event) => {
  if (event.target.classList.contains("todo-item-checkbox")) {
    const todoId = event.target.dataset.id;
    const completed = event.target.checked;

    try {
      const response = await fetch(`${urlTodosBase}${todoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userAuthToken}`,
        },
        body: JSON.stringify({
          completed: completed,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to toggle todo completed status");
      }
    } catch (error) {
      console.error(error);
    }
  }
});
