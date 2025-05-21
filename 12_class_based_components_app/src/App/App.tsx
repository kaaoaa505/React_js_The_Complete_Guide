import "./App.scss";
import { Component, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserSearch from "./Users/UsersSearch/UsersSearch";
import UsersContext from "../store/UsersContext";
import { UsersContextType } from "../store/UsersContextTypes";
import DUMMY_USERS from "./Samples/DUMMY_USERS";

class App extends Component {
  state = {
    searchTerm: "",
    users: DUMMY_USERS.slice(),
    showUsers: true,
  };

  updateSearchTerm = (term: string) => {
    this.setState({ searchTerm: term });
  };

  render(): ReactNode {
    const users_context: UsersContextType = {
      showUsers: this.state.showUsers,
      searchTerm: this.state.searchTerm,
      users: this.state.users,
      updateSearchTerm: this.updateSearchTerm,
    };

    return (
      <UsersContext.Provider value={users_context}>
        <div className="App">
          <ToastContainer />
          <h1>App</h1>
          <UserSearch />
        </div>
      </UsersContext.Provider>
    );
  }
}

export default App;
