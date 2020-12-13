const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());
app.use(cors());

//retieving posts
const todos = [
  {
    itemId: randomBytes(4).toString("hex"),
    task: "Add/update the task",
    completed: false,
  },
];

//retieving posts
app.get("/todoList", (req, res) => {
  console.log("get todo list");
  res.send(todos);
});

//adding new post
app.post("/todo", (req, res) => {
  const itemId = randomBytes(4).toString("hex");
  const { todo } = req.body;
  todos.push({ itemId, task: todo, completed: false });
  res.status(201).send(todos);
});

app.patch("/todo", (req, res) => {
  const { todo } = req.body;
  const tdCopy = [...todos];
  const index = tdCopy.findIndex((td) => td.itemId === todo.itemId);
  todos[index] = todo;
  res.status(201).send(todos);
});

app.listen(4000, () => {
  console.log("post service listening at 4000");
});
