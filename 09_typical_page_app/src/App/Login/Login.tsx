import { useEffect, useState, useContext } from 'react';

import './Login.scss';
import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';
import AuthContext from '../../store/AuthContext';
import EmailHandler from '../../handlers/EmailHandler';
import PasswordHandler from '../../handlers/PasswordHandler';

const Login = (props: any) => {
    const ctx = useContext(AuthContext);

    const emailHandler = EmailHandler();
    const passwordHandler = PasswordHandler();

    const [formIsValid, $formIsValid] = useState(false);

    useEffect(() => {
        console.log('useEffect is running...');

        return () => {
            console.log('useEffect return method...');
        };
    });

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking that everything is valid...');

            $formIsValid(emailHandler.email_is_valid && passwordHandler.password_is_valid);
        }, 500);

        return () => {
            console.log('clean identifier timeout function...');
            clearTimeout(identifier);
        }
    }, [emailHandler.email_is_valid, passwordHandler.password_is_valid]);

    const submitHandler = (event: any) => {
        event.preventDefault();
        ctx.onLogin(emailHandler.emailState.value, passwordHandler.passwordState.value);
    };

    return (
        <Card className="Login">
            <form onSubmit={submitHandler} autoComplete="off">
                <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />

                <div className={`control ${emailHandler.emailState.is_valid === false && emailHandler.emailState.value !== '' ? 'invalid' : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailHandler.emailState.value}
                        onChange={emailHandler.emailChangeHandler}
                        onBlur={emailHandler.validateEmailHandler}
                    />
                </div>

                <div className={`control ${passwordHandler.passwordState.is_valid && passwordHandler.passwordState.value !== '' === false ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordHandler.passwordState.value}
                        onChange={passwordHandler.passwordChangeHandler}
                        onBlur={passwordHandler.validatePasswordHandler}
                    />
                </div>

                <div className="actions">
                    <Button type="submit" className="btn" disabled={!formIsValid || emailHandler.emailState.value === '' || passwordHandler.passwordState.value === ''}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
