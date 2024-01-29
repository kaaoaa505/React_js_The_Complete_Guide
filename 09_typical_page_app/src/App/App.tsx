import './App.scss';

import { useContext, useEffect, useState } from 'react';

import MainHeader from './_partial/MainHeader/MainHeader';
import Home from './Home/Home';
import Login from './Login/Login';
import AuthContext, { AuthContextProvider } from '../store/AuthContext';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="App">
      <MainHeader />

      <main>
        {!ctx.is_logged_in && <Login />}
        {ctx.is_logged_in && <Home />}
      </main>
    </div>
  );
}

export default App;
