import './Users.scss';

import { Component, ReactNode } from 'react';

import User from './User/User';

class Users extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            showUsers: true,
            users: props.users.slice()
        };
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        if ('users' in this.props && this.props.users !== prevProps.users) {
            const users = this.props.users;
            this.setState({ users: users });
        }
    }

    toggleUsersHandler() {
        this.setState((prev_state: any) => {
            return {
                showUsers: !prev_state.showUsers
            }
        });
    };

    render(): ReactNode {
        const user_list_html = (
            <ul>
                {this.state.users.map((user: any) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );

        return (
            <div className='Users'>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>

                {this.state.showUsers && user_list_html}
            </div>
        );
    };
};

export default Users;
