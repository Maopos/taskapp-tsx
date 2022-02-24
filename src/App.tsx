import { useState } from "react";
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
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Html, Css, Javascript, Hooks",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Chakra UI",
      description: "Styles, Navbar, Forms",
      completed: false,
    },
  ]);

  return (
    <div className="container" style={{ height: "100vh", marginTop: "20px" }}>
      <Navbar title={title} />

      <div className="row">
        <div className="col-md-4">
          <TaskForm />
        </div>
        <div className="col-md-8">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
