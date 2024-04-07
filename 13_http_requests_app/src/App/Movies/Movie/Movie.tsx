import './Movie.scss';

const Movie = (props: any) => {
  return (
    <li className='Movie'>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
