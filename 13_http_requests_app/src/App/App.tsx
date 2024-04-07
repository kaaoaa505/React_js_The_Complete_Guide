import './App.scss';

import Movies from './Movies/Movies';

import MoviesExamples from '../Data/Examples/MoviesExamples';
import { useState } from 'react';

function App() {
  let [movies, $movies] = useState(MoviesExamples);
  let [is_loading, $is_loading] = useState(false);

  const fetchMoveies = async () => {
    $is_loading(true);

    const response = await fetch('https://swapi.dev/api/films');

    const json_data = await response.json();

    const results = json_data.results.map((movie: any) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      }
    });

    $movies(results);

    $is_loading(false);
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchMoveies}>Load Movies</button>
      </section>
      <section>
        {is_loading && <p>Loading....</p>}
        {!is_loading && <Movies movies={movies} />}
      </section>
    </div>
  );
}

export default App;
