import './App.scss';

import Movies from './Movies/Movies';

import MoviesExamples from '../Data/Examples/MoviesExamples';
import { useState } from 'react';

function App() {
  let [movies, $movies] = useState(MoviesExamples);
  let [is_loading, $is_loading] = useState(false);
  let [error, $error] = useState(null);

  const fetchMoveies = async () => {
    $is_loading(true);
    $error(null);

    try {
      const response = await fetch('https://swapi.dev/api/films', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

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
    } catch (new_error: any) {
      $error(new_error.message);
    }

    $is_loading(false);
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchMoveies}>Load Movies</button>
      </section>

      {error !== null && <section>{error}</section>}

      <section>
        {is_loading && <p>Loading....</p>}
        {!is_loading && movies.length === 0 && <p>No movie found.</p>}
        {!is_loading && movies.length > 0 && <Movies movies={movies} />}
      </section>
    </div>
  );
}

export default App;
