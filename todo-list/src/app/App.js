import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../features/todo/todoSlice";
import ToDoList from "../component/TodoList/TodoList";
import Paper from "@material-ui/core/Paper";
import Header from "../component/Header";
import NewItem from "../component/NewItem";
import { makeStyles } from "@material-ui/core/styles";

const store = configureStore({
  reducer: rootReducer
});

const useStyles = makeStyles(theme => ({
  paper: {
    width: "500px",
    padding: theme.spacing(3, 2),
    height: "500px",
    margin: "2rem auto"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Paper className={classes.paper}>
        <Header />
        <NewItem />
        <ToDoList></ToDoList>
      </Paper>
    </Provider>
  );
};

export default App;
