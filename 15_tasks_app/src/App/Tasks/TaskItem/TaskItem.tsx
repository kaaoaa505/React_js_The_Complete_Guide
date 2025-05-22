import "./TaskItem.scss";
import { deleteTask } from "../../../services/api";

interface TaskItemProps {
  id: string;
  children: React.ReactNode;
  onDelete: () => void;
}

const TaskItem = (props: TaskItemProps) => {
  const deleteHandler = async () => {
    try {
      await deleteTask(props.id);
      props.onDelete();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <li className="TaskItem">
      <span>{props.children}</span>
      <button onClick={deleteHandler} className="delete-btn">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
