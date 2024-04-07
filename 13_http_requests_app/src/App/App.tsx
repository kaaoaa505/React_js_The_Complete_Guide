import './App.scss';

import Movies from './Movies/Movies';

import MoviesExamples from '../Data/Examples/MoviesExamples';
import { useState } from 'react';

function App() {
  let [movies, $movies] = useState(MoviesExamples);

  const fetchMoveies = () => {
    const result = fetch('https://swapi.dev/api/films');
    result.then(async (response: any) => {
      const data = await response.json();
      
      console.log(data);

      $movies(data.results);
    })
  }
  return (
    <div className="App">
      <section>
        <button onClick={fetchMoveies}>Load Movies</button>
      </section>
      <section>
        <Movies movies={movies} />
      </section>
    </div>
  );
}

export default App;
