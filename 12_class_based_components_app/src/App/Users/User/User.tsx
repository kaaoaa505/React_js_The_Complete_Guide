import './User.scss';

import { Component, ReactNode } from 'react';

class User extends Component<any, any> {
    componentDidMount(): void {
        console.log('User componentDidMount()');
    }
  
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      console.log('User componentDidUpdate()');
        
    }
  
    componentWillUnmount(): void {
      console.log('User componentWillUnmount()');
    }

    render(): ReactNode {
        return <li className='User'>{this.props?.name}</li>;
    }
}

export default User;
