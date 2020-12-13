import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const getList = async () => {
  const { data } = await instance.get("/todoList");
  return data;
};

export const addTodo = async (todo) => {
  const { data } = await instance.post("/todo", { todo });
  return data;
};

export const updateTodo = async (todo) => {
  const { data } = await instance.patch("/todo", { todo });
  return data;
};
