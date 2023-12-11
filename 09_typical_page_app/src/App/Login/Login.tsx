import { useEffect, useState } from 'react';

import './Login.scss';
import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';

const Login = (props: any) => {
    const [enteredEmail, $enteredEmail] = useState('');
    const [emailIsValid, $emailIsValid] = useState(true);

    const [enteredPassword, $enteredPassword] = useState('');
    const [passwordIsValid, $passwordIsValid] = useState(true);

    const [formIsValid, $formIsValid] = useState(false);

    useEffect(() => {
        console.log('useEffect is running...');

        return () => {
            console.log('useEffect return method...');
        }
    });

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking that everything is valid...');

            $emailIsValid(enteredEmail.includes('@'));
            $passwordIsValid(enteredPassword.trim().length > 6);
            $formIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
        }, 500);

        return () => {
            console.log('clean identifier timeout function...');
            clearTimeout(identifier);
        }
    }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event: any) => {
        $enteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event: any) => {
        $enteredPassword(event.target.value);
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
