import React, { useEffect, useState } from "react";

import Tasks from "./Tasks/Tasks";
import NewTask from "./Tasks/NewTask/NewTask";

import { Task } from "../services/types";
import { fetchTasks, addTask } from "../services/api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasksHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const loadedTasks = await fetchTasks();
      setTasks(loadedTasks);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  const taskAddHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const newTask = await addTask(taskText);
      setTasks((prevTasks) => prevTasks.concat(newTask));
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasksHandler}
      />
    </React.Fragment>
  );
}

export default App;
