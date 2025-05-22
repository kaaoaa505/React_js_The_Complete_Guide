import "./Tasks.scss";

import Section from "../../UI/Section/Section";
import TaskItem from "./TaskItem/TaskItem";
import { Task } from "../../services/types";

interface TasksProps {
  items: Task[];
  loading: boolean;
  error: string | null;
  onFetch: () => Promise<void>;
}

const Tasks = (props: TasksProps) => {
  const handleDelete = async () => {
    await props.onFetch();
  };

  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id} id={task.id} onDelete={handleDelete}>
            {task.text}
          </TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = <h2>Loading tasks...</h2>;
  }

  return (
    <Section>
      <div className="container">{content}</div>
    </Section>
  );
};

export default Tasks;
