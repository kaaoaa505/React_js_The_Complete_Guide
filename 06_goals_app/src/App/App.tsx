import './App.css';

import { useState } from 'react';

import GoalList from './Goals/GoalList/GoalList';
import GoalInput from './Goals/GoalInput/GoalInput';

const App = () => {
  const [goals, $goals] = useState([
    {
      id: 1,
      text: 'Wake up early.',
    },
    {
      id: 2,
      text: 'Walk one hour or more every day.',
    },
    {
      id: 3,
      text: 'Eat Healthy food, Avoid Sugar.',
    },
    {
      id: 4,
      text: 'Work from office, Never remote from home.',
    },
    {
      id: 5,
      text: 'Sleep early, in a dark room with good air.',
    },
  ]);

  const addGoal = (enteredText: string) => {
    $goals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: (new Date()).getTime() });
      return updatedGoals;
    });
  };

  const deleteItem = (goalId: number) => {
    $goals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <div className='no-items-found'>No goals found, <br />Add more goals, <br />To achieve more.</div>
  );

  if (goals.length > 0) {
    content = (
      <GoalList items={goals} onDeleteItem={deleteItem} />
    );
  }

  return (
    <div className="App">
      <section id="goal-form">
        <GoalInput onAddGoal={addGoal} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
