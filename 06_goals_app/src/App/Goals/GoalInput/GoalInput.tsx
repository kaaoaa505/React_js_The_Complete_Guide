import './GoalInput.css';

import { SetStateAction, useState } from 'react';

import Button from '../../_components/Button/Button';

const GoalInput = (props: any) => {
  const [entered_value, $entered_value] = useState('');
  const [is_valid_value, $is_valid_value] = useState(true);

  const goalInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    $is_valid_value(true);
    $entered_value(event.target.value);
  };

  const formSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (entered_value.trim().length === 0) {
      $is_valid_value(false);
      return;
    } else {
      $is_valid_value(true);
      props.onAddGoal(entered_value);
    }
  };

  return (
    <form className='GoalInput' onSubmit={formSubmit}>
      <div className={`form-control ${is_valid_value ? '' : 'invalid'}`}>
        <label>Goal</label>
        <input type="text" onChange={goalInputChange} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
