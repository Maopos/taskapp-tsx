import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <div className="container" style={{ padding: "50px" }}>
      <h3>Task List:</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        {tasks.map((i) => (
          <TaskCard key={i.id} task={i} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
