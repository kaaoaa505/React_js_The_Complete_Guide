import './Movies.scss';

import Movie from './Movie/Movie';

import MovieInterface from '../../Interfaces/MovieInterface';

const Movies = (props: any) => {
  return (
    <ul className='Movies'>
      {props.movies.map((movie: MovieInterface) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default Movies;
