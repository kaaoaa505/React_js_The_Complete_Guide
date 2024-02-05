import './App.scss';

import Header from '../components/Layout/Header/Header';
import Meals from './Meals/Meals';

function App() {
  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
