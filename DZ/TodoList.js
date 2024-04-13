import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TextField
        label="Введите новую задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}>
        Добавить задачу
      </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Card>
              <ListItemText primary={task} />
              <Button onClick={() => handleDeleteTask(index)}>
                <Button />
              </Button>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
