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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((i) => i.id !== id));
  };

  return (
    <div className="container" style={{ height: "100vh", marginTop: "20px" }}>
      <Navbar title={title} />

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm
              tasks={tasks}
              setTasks={setTasks}
              editTask={editTask}
              setEditTask={setEditTask}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                setEditTask={setEditTask}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
