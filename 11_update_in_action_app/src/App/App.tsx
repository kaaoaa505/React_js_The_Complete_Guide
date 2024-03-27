import './App.scss';

import { useState, useCallback, useMemo } from 'react';

import TextStaticMemo from './TextStaticMemo/TextStaticMemo';
import TextData from './TextData/TextData';
import Button from './UI/Button/Button';
import ListData from './ListData/ListData';

function App() {
  console.log('App is running...');

  const [show_txt, $show_txt] = useState(false);
  const [allow_show_txt, $allow_show_txt] = useState(false);
  const [list_title, $list_title] = useState('My List');

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

  const changeTitle = useCallback(() => {
    $list_title('New Title');
  }, []);

  const items = useMemo(() => {
    return [5, 3, 1, 10, 9]
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

      <hr />

      <ListData list_title={list_title} items={items} />
      <Button onClick={changeTitle}>Change List Title</Button>
    </div>
  );
}

export default App;