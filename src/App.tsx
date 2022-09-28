import React, { useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface Task {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]); // [{},{}] INTERFACE TASK

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: Task[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control"
                  type={"text"}
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  autoFocus
                />
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
              {tasks?.map((task: Task, index: number) => (
                <div className="card card-body mt-2" key={index}>
                  <h2 style={{textDecoration: task.done ? "line-through" : ""}}>{task.name}</h2>
                  <p>{task.done}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
