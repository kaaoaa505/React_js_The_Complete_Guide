import './App.scss';

import Movies from './Movies/Movies';

import MoviesExamples from '../Data/Examples/MoviesExamples';

function App() {
  return (
    <div className="App">
      <section>
        <button>Load Movies</button>
      </section>
      <section>
        <Movies movies={MoviesExamples} />
      </section>
    </div>
  );
}

export default App;
