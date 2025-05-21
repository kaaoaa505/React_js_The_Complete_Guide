import "./UsersSearch.scss";

import { Fragment, Component, ReactNode } from "react";

import Users from "../Users";
import UsersContext from "../../../store/UsersContext";
import ErrorBoundaries from "../../../ErrorBoundaries/ErrorBoundaries";

class UsersSearch extends Component<any, any> {
  static contextType = UsersContext;
  context!: React.ContextType<typeof UsersContext>; // This tells TypeScript that `this.context` will have the type from `UsersContext`

  constructor(props: any) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount(): void {
    if (this.context && this.context.users) {
      this.setState({
        users: this.context.users.slice(),
      });
    }
  }

  render(): ReactNode {
    const searchChangeHandler = (event: any) => {
      const searchTerm: string = event.target.value;

      // Check if context is available (it should be, but this prevents TypeScript errors)
      if (this.context) {
        this.context.updateSearchTerm(searchTerm);

        // Filter users based on the updated searchTerm
        this.setState({
          users: this.context.users.filter((user: any) =>
            user.name.toUpperCase().includes(searchTerm.toUpperCase())
          ),
        });
      }
    };

    return (
      <Fragment>
        <div className="search">
          <input
            type="search"
            onChange={searchChangeHandler}
            value={this.context?.searchTerm || ""}
          />
        </div>

        <ErrorBoundaries>
          <Users users={this.state.users} searchTerm={this.state.searchTerm} />
        </ErrorBoundaries>
      </Fragment>
    );
  }
}

export default UsersSearch;
