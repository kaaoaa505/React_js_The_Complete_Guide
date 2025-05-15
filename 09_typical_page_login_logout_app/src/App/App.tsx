import "./App.scss";

import { useContext } from "react";
import { ToastContainer } from "react-toastify";

import MainHeader from "./_partial/MainHeader/MainHeader";
import Home from "./Home/Home";
import Login from "./Login/Login";
import AuthContext from "../store/AuthContext";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <div className="App">
      <ToastContainer />

      <MainHeader />

      <main>
        {!ctx.is_logged_in && <Login />}
        {ctx.is_logged_in && <Home />}
      </main>
    </div>
  ); 
}

export default App;
