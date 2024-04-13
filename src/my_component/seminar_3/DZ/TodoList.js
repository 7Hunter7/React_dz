import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((a, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Список дел</h2>
      <TextField
        label="Введите новую задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ margin: 20 }}
      />
      <Button
        variant="contained"
        onClick={addTask}
        style={{ marginTop: 30, marginLeft: 20 }}
      >
        Добавить задачу
      </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Card
              variant="outlined"
              style={{ minWidth: 350, display: "flex", padding: 15 }}
            >
              <ListItemText primary={task} s />
              <IconButton onClick={() => deleteTask(index)}>
                <DeleteIcon variant="contained" size="small" />
              </IconButton>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
