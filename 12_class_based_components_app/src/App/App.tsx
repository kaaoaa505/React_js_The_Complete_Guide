import './App.scss';

import { Component, ReactNode } from 'react';

import Users from './Users/Users';

class App extends Component {
  componentDidMount(): void {
      console.log('App componentDidMount()');
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('App componentDidUpdate()');
      
  }

  componentWillUnmount(): void {
    console.log('App componentWillUnmount()');
  }
  
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
