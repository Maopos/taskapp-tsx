import { Task } from "../interfaces/Task";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  // Destructuración de task
  const { id, title, description } = task;

  return (
    <div className="card border-warning mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">Tarea: {id}</div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
