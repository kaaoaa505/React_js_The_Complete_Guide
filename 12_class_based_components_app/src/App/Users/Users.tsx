import "./Users.scss";
import { Component, ReactNode } from "react";
import { toast } from "react-toastify";
import User from "./User/User";

class Users extends Component<any, any> {
  constructor(props: any) {
    super(props);

    console.log("props are: ", props);

    // Ensure that users is an empty array by default if it's not passed correctly
    this.state = {
      showUsers: true,
      users:
        props.users && Array.isArray(props.users) ? props.users.slice() : [], // Default to empty array if users are not passed correctly
    };
  }

  // Prevent unnecessary re-renders and state updates by checking if users are actually changed
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any
  ): void {
    if (prevState.users.length === 0) {
      toast.warning("No users provided.");
    }

    // Update state if users prop changes and is different from the previous state
    if (this.props.users !== prevProps.users) {
      const users = this.props.users;
      // Only update state if the users list has changed
      if (users !== this.state.users) {
        this.setState({ users: users });
      }
    }
  }

  toggleUsersHandler = () => {
    this.setState((prev_state: any) => ({
      showUsers: !prev_state.showUsers,
    }));
  };

  render(): ReactNode {
    // Handle case where users might be an empty array
    if (!this.state.users || this.state.users.length === 0) {
      return <p>No users available.</p>;
    }

    const user_list_html = (
      <ul>
        {this.state.users.map((user: any) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className="Users">
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>

        {this.state.showUsers && user_list_html}
      </div>
    );
  }
}

export default Users;
