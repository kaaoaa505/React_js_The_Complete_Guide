import './App.scss';

import Card from './_components/Card/Card';

import UserCreate from './Users/UserCreate/UserCreate';
import Users from './Users/Users';
import { useState } from 'react';
import ErrorModal from './_components/ErrorModal/ErrorModal';

const initial_users: any[] = [];
const initial_errors = {
  title: '',
  content: ''
};

const App = () => {
  const [users, $users] = useState(initial_users);
  const [errors, $errors] = useState(initial_errors);

  const addUserToUsers = (name: string, age: number) => {

    $users([
      ...users,
      {
        'name': name,
        age: age
      }
    ]);
  };

  const addErrors = () => {
    $errors({
      title: 'Invalid inputs',
      content: 'Must have a valid user name and age number!.'
    })
  }

  const errorHide = () => {
    $errors(initial_errors);
  }

  return (
    <div className="App">
      <Card>
        <UserCreate userCreateSubmit={addUserToUsers} errorsSubmit={addErrors}/>
      </Card>

      <Users users={users} />

      <ErrorModal title={errors.title} content={errors.content} onErrorConfirm={errorHide} />
    </div>
  );
};

export default App;