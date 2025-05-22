import { useState } from "react";

import Section from "../../../UI/Section/Section";
import TaskForm from "../TaskForm/TaskForm";

interface NewTaskProps {
  onAddTask: (taskText: string) => Promise<void>;
}

const NewTask = (props: NewTaskProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enterTaskHandler = async (taskText: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await props.onAddTask(taskText);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
