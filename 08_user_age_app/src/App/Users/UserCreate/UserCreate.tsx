import Button from '../../_components/Button/Button';
import './UserCreate.scss';

import React, { useRef, useState } from "react";

const UserCreate = (props: any) => {
    const [username, $username] = useState('');
    const [age, $age] = useState(0);

    let name_input_ref = useRef(null);
    let age_input_ref = useRef(null);

    const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        $username(event.target.value);
    };

    const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        $age(Number(event.target.value));
    };

    const formSubmit = (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();

        console.log(name_input_ref);
        console.log(name_input_ref.current);
        
        console.log(age_input_ref);
        console.log(age_input_ref.current);

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
                    <input id="username" type="text" value={username} onChange={usernameChange} placeholder='Name...' ref={name_input_ref} />
                </div>

                <div className='form-group'>
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="number" min={0} max={999} value={age === 0 ? '' : age} onChange={ageChange} placeholder='Age (years)...' ref={age_input_ref} />
                </div>

                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default UserCreate;