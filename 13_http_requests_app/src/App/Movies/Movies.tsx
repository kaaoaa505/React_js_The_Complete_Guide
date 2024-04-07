import './Movies.scss';

import Movie from './Movie/Movie';

import MovieInterface from '../../Interfaces/MovieInterface';

const Movies = (props: any) => {
  let increment_index = 0;

  return (
    <ul className='Movies'>
      {props.movies.map((movie: MovieInterface) => (
        <Movie
          key={increment_index++}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default Movies;
