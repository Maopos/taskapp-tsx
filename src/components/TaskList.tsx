import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <div className="container" style={{ padding: "50px 0px" }}>
      <h3>Task List:</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        {tasks.map((i, j) => (
          <TaskCard key={i.id} task={i} count={j} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
