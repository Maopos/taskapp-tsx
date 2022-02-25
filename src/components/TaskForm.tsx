import { BsFileEarmarkPlus } from "react-icons/bs";
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { Task } from "../interfaces/Task";

type onChangeType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addTask: (task: Task) => void;
}

const TaskForm = ({ addTask }: Props) => {
  // Estados
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const handleTask = ({ target: { name, value } }: onChangeType) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, description, completed } = task;

    if ([title, description, completed].includes("")) {
      return;
    }

    const newTask: Task = {
      id: generateId(),
      title,
      description,
      completed,
    };

    addTask(newTask);

    setTask({
      title: "",
      description: "",
      completed: false,
    });

    inputRef.current?.focus();
  };

  return (
    <div className="container" style={{ padding: "50px 0 0 50px" }}>
      <h3>Add Task:</h3>
      <div className="card bg-warning mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">
          <h4>New Task here!</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="col-form-label" htmlFor="title">
                <h5>Title:</h5>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Task title..."
                id="title"
                name="title"
                value={task.title}
                onChange={handleTask}
                autoFocus
                ref={inputRef}
              />
            </div>

            <div className="form-group mt-4">
              <label className="col-form-label" htmlFor="description">
                <h5>Description:</h5>
              </label>
              <textarea
                className="form-control"
                placeholder="Task description..."
                id="description"
                name="description"
                value={task.description}
                onChange={(e) => handleTask(e)}
              />
            </div>
            <button
              className="btn btn-success mt-4"
              style={{ width: "100%" }}
              type="submit"
            >
              Save <BsFileEarmarkPlus />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
