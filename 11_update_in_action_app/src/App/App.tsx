
import { useState } from 'react';
import './App.scss';
import TextData from './TextData/TextData';
import Button from './UI/Button/Button';

function App() {
  console.log('app is running...');

  const [show_txt, $show_txt] = useState(false);

  const showText = () => {
    $show_txt(true);

    setTimeout(() => {
      $show_txt(false);
    }, 3000)
  }

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <TextData />

      <hr />

      {show_txt && <p>This is new dynamic text That reload App component</p>}
      {!show_txt && <Button onClick={showText}>Show text with app reload</Button>}
    </div>
  );
}

export default App;
