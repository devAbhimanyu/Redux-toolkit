import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const getList = async () => {
  const { data } = await instance.get("/todoList");
  return data;
};

export const addNewTodo = async (item) => {
  const { data } = await instance.post("/todo", item);
  return data;
};
