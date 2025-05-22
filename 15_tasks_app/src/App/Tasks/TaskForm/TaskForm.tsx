import "./TaskForm.scss";

import { useRef } from "react";

interface TaskFormProps {
  onEnterTask: (taskText: string) => Promise<void>;
  loading: boolean;
}

const TaskForm = (props: TaskFormProps) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current?.value;

    if (enteredValue && enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
      if (taskInputRef.current) {
        taskInputRef.current.value = "";
      }
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
