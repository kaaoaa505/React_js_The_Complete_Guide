import React from 'react';
import './App.css';
import ForwardCounter from './ForwardCounter/ForwardCounter';
import BackwardCounter from './BackwardCounter/BackwardCounter';

function App() {
  return (
    <div className="App">
    <ForwardCounter />
    <BackwardCounter />
    </div>
  );
}

export default App;
