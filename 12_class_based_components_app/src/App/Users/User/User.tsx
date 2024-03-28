import './User.scss';

import { Component, ReactNode } from 'react';

class User extends Component<any, any> {
    render(): ReactNode {        
        return <li className='User'>{this.props?.name}</li>;
    }
}

export default User;
