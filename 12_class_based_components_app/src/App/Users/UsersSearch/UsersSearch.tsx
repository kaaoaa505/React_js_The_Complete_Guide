import './UsersSearch.scss';

import { Fragment, Component, ReactNode } from 'react';

import Users from '../Users';
import DUMMY_USERS from '../../Samples/DUMMY_USERS';

class UsersSearch extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            searchTerm: '',
            users: DUMMY_USERS.slice()
        };
    }

    render(): ReactNode {
        const searchChangeHandler = (event: any) => {
            const searchTerm: string = event.target.value;

            this.setState({
                searchTerm: searchTerm,
                users: DUMMY_USERS.filter((user: any) => user.name.toUpperCase().includes(searchTerm.toUpperCase()))
            })
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