import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";

interface Props {
  title: string;
}

function App({ title }: Props) {
  // Estados
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((i) => i.id != id));
  };

  return (
    <div className="container" style={{ height: "100vh", marginTop: "20px" }}>
      <Navbar title={title} />

      <div className="row">
        <div className="col-md-4">
          <TaskForm addTask={addTask} />
        </div>
        <div className="col-md-8">
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
