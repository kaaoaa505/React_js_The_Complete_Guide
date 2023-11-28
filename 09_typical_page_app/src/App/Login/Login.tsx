import { useState } from 'react';

import './Login.scss';
import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';

const Login = (props: any) => {
    const [enteredEmail, $enteredEmail] = useState('');
    const [emailIsValid, $emailIsValid] = useState(true);
    const [enteredPassword, $enteredPassword] = useState('');
    const [passwordIsValid, $passwordIsValid] = useState(true);
    const [formIsValid, $formIsValid] = useState(false);

    const emailChangeHandler = (event: any) => {
        $enteredEmail(event.target.value);

        $formIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event: any) => {
        $enteredPassword(event.target.value);

        $formIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes('@')
        );
    };

    const validateEmailHandler = () => {
        $emailIsValid(enteredEmail.includes('@'));
    };

    const validatePasswordHandler = () => {
        $passwordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className="Login">
            <form onSubmit={submitHandler}>
                <div
                    className={`control ${emailIsValid === false ? 'invalid' : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`control ${passwordIsValid === false ? 'invalid' : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className="actions">
                    <Button type="submit" className="btn" disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
