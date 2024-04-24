import './App.scss';

import { useCallback, useEffect, useState } from 'react';

import Movies from './Movies/Movies';
import MoviesExamples from '../Data/Examples/MoviesExamples';

const empty_movies = new Array;

function App() {
  let [movies, $movies] = useState(MoviesExamples);
  let [is_loading, $is_loading] = useState(false);
  let [error, $error] = useState('');

  const fetchMoveies = useCallback(async () => {
    $is_loading(true);
    $error('');

    $movies(empty_movies);

    const response = await fetch('https://swapi.info/api/films');
    // const response = await fetch('https://swapi.info/api/films', {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    // });

    if (!response.ok) throw new Error('Something went wrong.');

    try {
      const json_data = await response.json();

      // const results = json_data.results.map((movie: any) => {
      const results = json_data.map((movie: any) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          releaseDate: movie.release_date,
          openingText: movie.opening_crawl,
        }
      });

      $movies(results);
    } catch (new_error: any) {
      $error('Response status: ' + response.status.toString());
    }

    $is_loading(false);
  }, []);

  // useEffect(() => {
  //   fetchMoveies();
  // }, []);

  let main_content: any = '';

  if (is_loading) {
    main_content = <p>Loading....</p>
  } else {
    if (movies.length === 0) {
      main_content = <p>No movie found.</p>
    } else if (movies.length > 0) {
      main_content = <Movies movies={movies} />
    }
  }

  return (
    <div className="App">
      <section>
        <button onClick={fetchMoveies}>Load Movies</button>
      </section>

      {error !== '' && <section>{error}</section>}

      <section>
        {main_content}
      </section>
    </div>
  );
}

export default App;