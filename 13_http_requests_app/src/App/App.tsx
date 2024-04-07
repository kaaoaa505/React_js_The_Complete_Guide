import './App.scss';

import Movies from './Movies/Movies';

import MoviesExamples from '../Data/Examples/MoviesExamples';
import { useState } from 'react';

function App() {
  let [movies, $movies] = useState(MoviesExamples);

  const fetchMoveies = () => {
    const result = fetch('https://swapi.dev/api/films');
    result.then(async (response: any) => {
      return await response.json();
    }).then(data => {
      const targetResults = data.results.map((movie: any) => {
        return {
          id: movie.episode_id ,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        }
      });
      $movies(targetResults);
    });
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
