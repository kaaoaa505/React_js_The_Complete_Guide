import './App.scss';

import React, { useEffect, useState } from 'react';

import MainHeader from './_partial/MainHeader/MainHeader';
import Home from './Home/Home';
import Login from './Login/Login';
import AuthContext from '../store/AuthContext';

function App() {
  const [isLoggedIn, $isLoggedIn] = useState(false);

  const storage_is_logged_in = localStorage.getItem('is_logged_in');

  useEffect(() => {
    if (storage_is_logged_in === 'true') {
      $isLoggedIn(true);
    }
  }, [storage_is_logged_in]);

  const loginHandler = (email: string, password: string) => {
    $isLoggedIn(true);

    localStorage.setItem('is_logged_in', 'true');
  };

  const logoutHandler = () => {
    $isLoggedIn(false);

    localStorage.removeItem('is_logged_in');
  };

  return (
    <AuthContext.Provider value={{
      is_logged_in: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler,
    }}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
