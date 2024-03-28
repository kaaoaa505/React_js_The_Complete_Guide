import './App.scss';

import { Component, ReactNode } from 'react';

import UserSearch from './Users/UsersSearch/UsersSearch';
import UsersContext from '../store/UsersContext';
import DUMMY_USERS from './Samples/DUMMY_USERS';

class App extends Component {
  render(): ReactNode {
    const users_context: any = {
      showUsers: true,
      searchTerm: '',
      users: DUMMY_USERS.slice()
    };

    return (
      <UsersContext.Provider value={users_context}>
        <div className="App">
          <h1>App</h1>
          <UserSearch />
        </div>
      </UsersContext.Provider>
    );
  }
}

export default App;
