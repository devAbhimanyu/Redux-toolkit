import React from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../features/todo/todoSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grid: {
    alignItems: "center",
    boxSizing: "border-box",
    padding: "1rem",
  },
  input: {
    width: "100%",
  },
}));

const NewItem = (props) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");

  const classes = useStyles();

  const onclickHandler = () => {
    dispatch(addNewTodo(todo));
    setTodo("");
  };
  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={9}>
        <TextField
          id="standard-textarea"
          label="Add new task"
          placeholder="Add new task"
          multiline
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={classes.input}
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={onclickHandler}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewItem;
