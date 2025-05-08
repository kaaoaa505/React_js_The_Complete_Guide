import Button from '../../_components/Button/Button';
import './UserCreate.scss';

import React, { useRef } from "react";

const UserCreate = (props: any) => {
    const username_ref = useRef<HTMLInputElement>(null);
    const age_ref = useRef<HTMLInputElement>(null);

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const username = username_ref.current?.value || '';
        const age = parseInt(age_ref.current?.value || '0', 10);

        console.warn('username is: ', username);
        console.warn('age is: ', age);

        if (username.trim().length === 0 || age < 1) {
            console.error('Invalid input.');
            props.errorsSubmit();
            return;
        }

        console.info('form submitted!', username, age);
        props.userCreateSubmit(username, age);

        if (username_ref.current) username_ref.current.value = '';
        if (age_ref.current) age_ref.current.value = '';
    };

    return (
        <div className="UserCreate">
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">User Name:</label>
                    <input id="username" type="text" placeholder='Name...' ref={username_ref} />
                </div>

                <div className='form-group'>
                    <label htmlFor="age">Age:</label>
                    <input id="age" type="number" min={0} max={999} placeholder='Age (years)...' ref={age_ref} />
                </div>

                <Button>Submit</Button>
            </form>
        </div>
    );
};

export default UserCreate;
