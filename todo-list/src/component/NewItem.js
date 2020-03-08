import React from "react";
import { connect } from "react-redux";
import { addItem } from "../features/todo/todoSlice";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  grid: {
    alignItems: "center",
    boxSizing: "border-box",
    padding: "1rem"
  },
  input: {
    width: "100%"
  }
}));

const NewItem = props => {
  const [entry, updateEntry] = React.useState("");
  const classes = useStyles();

  const onclickHandler = () => {
    props.addItem({
      todoItem: entry
    });
    updateEntry("");
  };
  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={9}>
        <TextField
          id="standard-textarea"
          label="Add new task"
          placeholder="Add new task"
          multiline
          value={entry}
          onChange={e => updateEntry(e.target.value)}
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
const mapStateToProps = state => ({
  value: state
});

const mapDispatchToProps = { addItem };
export default connect(mapStateToProps, mapDispatchToProps)(NewItem);
