import { useReducer } from "react";
import EmailReducer from "../reducers/EmailReducer";

const init_state = {
    value: '',
    is_valid: false
};

const EmailHandler = () => {
    const [emailState, dispatchEmail] = useReducer(EmailReducer, init_state);

    const { is_valid: email_is_valid } = emailState;

    const emailChangeHandler = (event: any) => {
        dispatchEmail({
            type: 'USER_INPUT',
            value: event.target.value
        });
    };

    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'USER_BLUR'
        });
    }

    return {
        email_is_valid,
        emailState,
        emailChangeHandler,
        validateEmailHandler,
    }
}

export default EmailHandler;