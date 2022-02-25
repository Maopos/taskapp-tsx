import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";
import { BiTaskX } from "react-icons/bi";

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  if (tasks.length === 0) {
    return (
      <div style={{ padding: "50px 0px" }}>
        <h3>There are no tasks yet...</h3>
        <BiTaskX size="3rem" />
      </div>
    );
  }

  return (
    <div style={{ padding: "50px 0px" }}>
      <h3>Task List: {tasks.length}</h3>
      <div className="col-md-4">
        {tasks.map((i, j) => (
          <TaskCard key={i.id} task={i} count={j} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
