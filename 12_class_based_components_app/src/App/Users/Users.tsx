import './Users.scss';

import { Component, ReactNode } from 'react';

import User from './User/User';

const DUMMY_USERS = [
    { id: 1, name: 'Khaled' },
    { id: 2, name: 'Allam' },
    { id: 3, name: 'Ahmed' },
];

class Users extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            showUsers: true
        };
    }

    toggleUsersHandler = () => {
        this.setState((prev_state: any) => {
            return {
                showUsers: !prev_state.showUsers
            }
        });
    };

    render(): ReactNode {
        const user_list_html = (
            <ul>
                {DUMMY_USERS.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );
        
        return (
            <div className='Users'>
                <button onClick={this.toggleUsersHandler}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>

                {this.state.showUsers && user_list_html}
            </div>
        );
    };
};

export default Users;
