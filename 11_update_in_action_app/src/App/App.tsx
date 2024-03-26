import './App.scss';

import { useState, useCallback } from 'react';

import TextStaticMemo from './TextStaticMemo/TextStaticMemo';
import TextData from './TextData/TextData';
import Button from './UI/Button/Button';

function App() {
  console.log('App is running...');

  const [show_txt, $show_txt] = useState(false);
  const [allow_show_txt, $allow_show_txt] = useState(false);

  const showText = useCallback(() => {
    $show_txt(true);

    setTimeout(() => {
      $show_txt(false);
      $allow_show_txt(false);
    }, 3000)
  }, []);

  const allowShowText = useCallback(() => {
    $allow_show_txt(true);
  }, []);

  return (
    <div className="App">
      <h1>Component reload partial DOM</h1>
      <TextStaticMemo />

      <hr />
      
      <TextData />

      <hr />

      {show_txt && <p>This is new dynamic text That reload App component</p>}
      {!show_txt && allow_show_txt && <Button onClick={showText}>Show text with app reload</Button>}
      {!allow_show_txt && <Button onClick={allowShowText}>Allow show text</Button>}
    </div>
  );
}

export default App;