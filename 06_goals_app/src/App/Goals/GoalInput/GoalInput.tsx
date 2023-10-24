import './GoalInput.css';

import { SetStateAction, useState } from 'react';

import Button from '../../_components/Button/Button';

const GoalInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setEnteredValue(event.target.value);
  };

  const formSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form className='GoalInput' onSubmit={formSubmit}>
      <div className="form-control">
        <label> Goal</label>
        <input type="text" onChange={goalInputChange} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
