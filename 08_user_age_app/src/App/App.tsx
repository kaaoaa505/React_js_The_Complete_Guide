import './App.scss';

import Card from './_components/Card/Card';

import UserCreate from './Users/UserCreate/UserCreate';
import Users from './Users/Users';
import React, { useState } from 'react';
import ErrorModal from './_components/ErrorModal/ErrorModal';
import Wrapper from './_components/Wrapper/Wrapper';
import ReactDOM from 'react-dom';

const root_overlays = document.getElementById('root_overlays');

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
      <Wrapper>Name with Age & ErrorModel</Wrapper>
      <br />
      <React.Fragment>Web</React.Fragment> <>App</>
      <Card>
        <UserCreate userCreateSubmit={addUserToUsers} errorsSubmit={addErrors} />
      </Card>

      <Users users={users} />

      {ReactDOM.createPortal(<ErrorModal title={errors.title} content={errors.content} onErrorConfirm={errorHide} />, root_overlays as HTMLElement)}

    </div>
  );
};

export default App;