import './UsersSearch.scss';

import { Fragment, Component, ReactNode, Context } from 'react';

import Users from '../Users';
import UsersContext from '../../../store/UsersContext';

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

                <Users users={this.state.users} searchTerm={this.state.searchTerm} />
            </Fragment>
        );
    }
}

export default UsersSearch;