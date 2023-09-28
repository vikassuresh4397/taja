// index.js

const express = require("express");
const app = express();
const todoController = require("./controllers/todo.controller");

app.use(express.json());

app.get("/", todoController.getTodos);
app.post("/", todoController.addTodo);
app.put("/:id", todoController.updateTodo);
app.delete("/:id", todoController.deleteTodo);

module.exports = app;
