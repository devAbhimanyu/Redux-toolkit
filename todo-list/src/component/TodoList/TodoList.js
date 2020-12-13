import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDoList, updateToDo } from "../../features/todo/todoSlice";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "400px",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
  },
  strike: {
    textDecoration: "line-through;",
  },
}));

const ToDoList = (props) => {
  const classes = useStyles();
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleToggle = (todo) => {
    const tdCopy = { ...todo };
    tdCopy.completed = !todo.completed;
    dispatch(updateToDo(tdCopy));
  };

  useEffect(() => {
    todoList.length === 0 && dispatch(fetchToDoList());
  }, [dispatch, todoList]);

  const listItems = todoList.map((item) => {
    const listItemText = item.completed ? (
      <ListItemText
        id={labelId}
        primary={item.task}
        className={classes.strike}
      />
    ) : (
      <ListItemText id={labelId} primary={item.task} />
    );
    const labelId = `checkbox-list-secondary-label-${item.itemId}`;
    return (
      <ListItem key={item.itemId} button>
        {listItemText}
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={() => handleToggle(item)}
            checked={item.completed}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return (
    <List dense className={classes.root}>
      {listItems}
    </List>
  );
};

export default ToDoList;
