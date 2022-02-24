import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
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
      description: "Html, Css, Javascript, Tailwind, Hooks",
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
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
