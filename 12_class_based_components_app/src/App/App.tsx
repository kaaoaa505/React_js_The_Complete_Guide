import './App.scss';

import { Component, ReactNode } from 'react';

import Users from './Users/Users';
import UserSearch from './Users/UsersSearch/UsersSearch';

class App extends Component {

  render(): ReactNode {
    return (
      <div className="App">
        <h1>App</h1>
        <UserSearch />
      </div>
    );
  }
}

export default App;
