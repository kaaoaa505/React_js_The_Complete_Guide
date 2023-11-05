import Button from '../../_components/Button/Button';
import './UserCreate.scss';

import React, { useState } from "react";

const UserCreate = (props: any) => {
    const [username, $username] = useState('');
    const [age, $age] = useState(0);

    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        $username(event.target.value);
    };

    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        $age(Number(event.target.value));
    };

    const formSubmit = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();

        if(username.trim().length === 0 || age < 1){
            console.log('Invalid input.')
            props.errorsSubmit();
            return;
        }

        console.log('form submitted!.', username, age);
        props.userCreateSubmit(username, age);

        $username('');
        $age(0);
    };

    return (
        <div className="UserCreate" onSubmit={formSubmit}>
            <form>
                <div className='form-group'>
                    <label htmlFor="username">User Name:</label>
                    <input id="username" type="text" value={username} onChange={usernameChange} placeholder='Name...' />
                </div>

                <div className='form-group'>
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="number" min={0} max={999} value={age === 0 ? '' : age} onChange={ageChange} placeholder='Age (years)...' />
                </div>

                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default UserCreate;