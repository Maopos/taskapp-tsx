import { BsTrash } from "react-icons/bs";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
  deleteTask: (id: string) => void;
  count: number;
  setEditTask: React.Dispatch<React.SetStateAction<Task>>
}

const TaskCard = ({ task, deleteTask, count, setEditTask }: Props) => {
  // Destructuración de task
  const { id, title, description } = task;

  
  return (
    <div className="card border-warning mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header bg-warning">
        <h6>Task {count + 1}.</h6>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <button
          className="btn btn-warning mt-2"
          style={{ width: "100%", color: "black" }}
          onClick={() => setEditTask(task)}
        >
          Edit <BsTrash />
        </button>
        <button
          className="btn btn-danger mt-2"
          style={{ width: "100%" }}
          onClick={() => deleteTask(id)}
        >
          Delete <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
