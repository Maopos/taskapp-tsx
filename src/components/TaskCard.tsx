import { BsTrash } from "react-icons/bs";
import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  // Destructuración de task
  const { id, title, description } = task;

  return (
    <div className="card border-warning mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header bg-warning">
        <h6>Task {id}.</h6>
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <button className="btn btn-danger" style={{ width: "100%" }}>
          Delete <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
