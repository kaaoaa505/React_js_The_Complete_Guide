import './App.scss';

import { useCallback, useEffect, useState } from 'react';

import Movies from './Movies/Movies';
import MoviesExamples from '../Data/Examples/MoviesExamples';
import MovieCreate from './Movies/MovieCreate/MovieCreate';

const empty_movies = new Array;

const firebase_request_link = 'https://react-http-requests-app-a482e-default-rtdb.firebaseio.com/movies.json';

function App() {
  let [movies, $movies] = useState(MoviesExamples);
  let [is_loading, $is_loading] = useState(false);
  let [error, $error] = useState('');

  const fetchMoveies = useCallback(async () => {
    $is_loading(true);
    $error('');

    $movies(empty_movies);

    const response = await fetch(firebase_request_link);

    if (!response.ok) throw new Error('Something went wrong.');

    try {
      const json_data = await response.json();

      let movies_list: any = [];

      for (const key in json_data) {
        movies_list.push({
          id: key,
          title: json_data[key].title,
          release_date: json_data[key].release_date,
          opening_crawl: json_data[key].opening_crawl,
        });
      }

      $movies(movies_list);
    } catch (new_error: any) {
      $error('Response status: ' + response.status.toString());
    }

    $is_loading(false);
  }, []);

  useEffect(() => {
    $movies([]);

    fetchMoveies();
  }, []);

  const createMovie = async (movie: any) => {
    console.log('todo: movie submit, ', movie);
    console.log('todo: App createMovie method.');
    const response = await fetch(firebase_request_link, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    console.log('response is: ', response);

    const data = await response.json();

    console.log('data is: ', data);

  }

  let main_content: any = '';

  if (is_loading) {
    main_content = <p>Loading....</p>
  } else {
    if (movies.length === 0) {
      main_content = <p>No movie found.</p>
    } else if (movies.length > 0) {
      console.log('movies is: ', movies)
      main_content = <Movies movies={movies} />
    }
  }
  return (
    <div className="App">
      <section>
        <MovieCreate createMovie={createMovie} />
      </section>

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