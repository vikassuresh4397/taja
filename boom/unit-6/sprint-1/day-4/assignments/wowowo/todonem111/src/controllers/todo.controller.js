// todo.controller.js

const fs = require("fs");

const getTodos = (req, res) => {
  fs.readFile("./db.json", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      res.status(200).json(db.todos);
    }
  });
};

const addTodo = (req, res) => {
  fs.readFile("./db.json", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      const { id, task, status } = req.body;
      const newTodo = { id, task, status };
      db.todos.push(newTodo);

      fs.writeFile("./db.json", JSON.stringify(db), (err) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          res.status(200).json(db.todos);
        }
      });
    }
  });
};

const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("./db.json", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      const { task, status } = req.body;

      const todo = db.todos.find((todo) => todo.id === id);
      if (!todo) {
        res.status(400).send("Invalid argument");
      } else {
        todo.task = task;
        todo.status = status;

        fs.writeFile("./db.json", JSON.stringify(db), (err) => {
          if (err) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.status(200).json(db.todos);
          }
        });
      }
    }
  });
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);

  fs.readFile("./db.json", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const db = JSON.parse(data);
      const index = db.todos.findIndex((todo) => todo.id === id);

      if (index === -1) {
        res.status(400).send("Invalid argument");
      } else {
        db.todos.splice(index, 1);

        fs.writeFile("./db.json", JSON.stringify(db), (err) => {
          if (err) {
            console.error(err);
            res.sendStatus(500);
          } else {
            res.status(200).json(db.todos);
          }
        });
      }
    }
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
