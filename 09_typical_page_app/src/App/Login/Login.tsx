import { useEffect, useState, useReducer } from 'react';

import './Login.scss';
import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';

const init_state = {
    value: '',
    is_valid: false
};

const emailReducer = (state: any, action: any) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.value,
            is_valid: action.value.includes('@')
        };
    }

    if (action.type === 'USER_BLUR') {
        return {
            value: state.value,
            is_valid: state.value.includes('@')
        };
    }

    return init_state;
}

const passwordReducer = (state: any, action: any) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.value,
            is_valid: action.value.trim().length > 6
        };
    }

    if (action.type === 'USER_BLUR') {
        return {
            value: state.value,
            is_valid: state.value.trim().length > 6
        };
    }

    return init_state;
}

const Login = (props: any) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, init_state);

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, init_state);

    const [formIsValid, $formIsValid] = useState(false);

    const {is_valid: email_is_valid} = emailState;
    const {is_valid: password_is_valid} = passwordState;

    useEffect(() => {
        console.log('useEffect is running...');

        return () => {
            console.log('useEffect return method...');
        };
    });

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking that everything is valid...');

            $formIsValid(email_is_valid && password_is_valid);
        }, 500);

        return () => {
            console.log('clean identifier timeout function...');
            clearTimeout(identifier);
        }
    }, [email_is_valid, password_is_valid]);

    const emailChangeHandler = (event: any) => {
        dispatchEmail({
            type: 'USER_INPUT',
            value: event.target.value
        });
    };

    const passwordChangeHandler = (event: any) => {
        dispatchPassword({
            type: 'USER_INPUT',
            value: event.target.value
        });
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    function validateEmailHandler(): void {
        dispatchEmail({
            type: 'USER_BLUR'
        });
    }

    function validatePasswordHandler(): void {
        dispatchPassword({
            type: 'USER_BLUR'
        });
    }

    return (
        <Card className="Login">
            <form onSubmit={submitHandler} autoComplete="off">
                <input autoComplete="false" name="hidden" type="text" style={{ display: 'none' }} />

                <div className={`control ${emailState.is_valid === false && emailState.value !== '' ? 'invalid' : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>

                <div className={`control ${passwordState.is_valid && passwordState.value !== '' === false ? 'invalid' : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>

                <div className="actions">
                    <Button type="submit" className="btn" disabled={!formIsValid || emailState.value === '' || passwordState.value === ''}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
