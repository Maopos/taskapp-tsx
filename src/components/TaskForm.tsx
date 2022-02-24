import { BsFileEarmarkPlus } from "react-icons/bs";

const TaskForm = () => {
  return (
    <div className="container" style={{ padding: "50px 0 0 50px" }}>
      <h3>Add Task:</h3>
      <div className="card bg-warning mb-3" style={{ maxWidth: "20rem" }}>
        <div className="card-header">
          <h4>New Task here!</h4>
        </div>
        <div className="card-body">
          <form>
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
              />
            </div>
            <button className="btn btn-success mt-4" style={{ width: "100%" }}>
              Save <BsFileEarmarkPlus />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
