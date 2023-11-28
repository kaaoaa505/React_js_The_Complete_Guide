import './App.scss';

import React, { useState } from 'react';

import MainHeader from './_partial/MainHeader/MainHeader';
import Home from './Home/Home';
import Login from './Login/Login';

function App() {
  const [isLoggedIn, $isLoggedIn] = useState(false);

  const loginHandler = (email: string, password: string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    $isLoggedIn(true);
  };

  const logoutHandler = () => {
    $isLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
