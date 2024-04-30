import './Movies.scss';

import Movie from './Movie/Movie';

import MovieInterface from '../../Interfaces/MovieInterface';

const Movies = (props: any) => {
  let increment_index = 0;

  return (
    <ul className='Movies'>
      {props.movies.map((movie: MovieInterface) => (
        <Movie
          key={movie.id}
          title={movie.title}
          release_date={movie.release_date}
          opening_crawl={movie.opening_crawl}
        />
      ))}
    </ul>
  );
};

export default Movies;
