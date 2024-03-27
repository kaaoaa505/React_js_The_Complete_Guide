import './App.scss';

import { Component, ReactNode } from 'react';

import Users from './Users/Users';

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <h1>App</h1>
        <Users />
      </div>
    );
  }
}

export default App;
