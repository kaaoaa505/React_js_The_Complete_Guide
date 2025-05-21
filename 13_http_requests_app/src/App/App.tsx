import "./App.scss";

import { useCallback, useEffect, useState } from "react";

import Movies from "./Movies/Movies";
import MovieCreate from "./Movies/MovieCreate/MovieCreate";

const API_BASE_URL = "http://localhost:3001/api";

function App() {
  let [movies, $movies] = useState([]);
  let [is_loading, $is_loading] = useState(false);
  let [error, $error] = useState("");

  const fetchMovies = useCallback(async () => {
    $is_loading(true);
    $error("");

    try {
      const response = await fetch(`${API_BASE_URL}/movies`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const movies_list = await response.json();
      $movies(movies_list);
    } catch (new_error: any) {
      $error(new_error.message || "Failed to fetch movies");
    }

    $is_loading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const createMovie = async (movie: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Refresh the movies list after creating a new one
      await fetchMovies();
    } catch (error: any) {
      $error(error.message || "Failed to create movie");
    }
  };

  let main_content: any = "";

  if (is_loading) {
    main_content = <p>Loading....</p>;
  } else {
    if (movies.length === 0) {
      main_content = <p>No movie found.</p>;
    } else if (movies.length > 0) {
      main_content = <Movies movies={movies} />;
    }
  }
  return (
    <div className="App">
      <section>
        <MovieCreate createMovie={createMovie} />
      </section>

      <section>
        <button onClick={fetchMovies}>Load Movies</button>
      </section>

      {error !== "" && <section>{error}</section>}

      <section>{main_content}</section>
    </div>
  );
}

export default App;
