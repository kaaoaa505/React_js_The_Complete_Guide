import './Movie.scss';

const Movie = (props: any) => {
  console.log('movie props is: ', props);

  return (
    <li className='Movie'>
      <h2>{props.title}</h2>
      <h3>{props.release_date}</h3>
      <p>{props.opening_crawl}</p>
    </li>
  );
};

export default Movie;
