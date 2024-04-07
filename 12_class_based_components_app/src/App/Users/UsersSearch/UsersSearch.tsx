import './UsersSearch.scss';

import { Fragment, Component, ReactNode, Context } from 'react';

import Users from '../Users';
import UsersContext from '../../../store/UsersContext';
import ErrorBoundaries from '../../../ErrorBoundaries/ErrorBoundaries';

class UsersSearch extends Component<any, any, any> {
    static contextType = UsersContext;
    context!: React.ContextType<typeof UsersContext>;

    constructor(props: any) {
        super(props);

        this.state = {
            searchTerm: '',
            users: []
        };
    }

    componentDidMount(): void {
        this.setState({
            users: this.context.users.slice()
        });
    }

    render(): ReactNode {
        const searchChangeHandler = (event: any) => {
            const searchTerm: string = event.target.value;

            this.setState({
                searchTerm: searchTerm,
                users: this.context.users.slice().filter((user: any) => user.name.toUpperCase().includes(searchTerm.toUpperCase()))
            });
        };

        return (
            <Fragment>
                <div className='search'>
                    <input type='search' onChange={searchChangeHandler} />
                </div>

                <ErrorBoundaries>
                    <Users users={this.state.users} searchTerm={this.state.searchTerm} />
                </ErrorBoundaries>
            </Fragment>
        );
    }
}

export default UsersSearch;