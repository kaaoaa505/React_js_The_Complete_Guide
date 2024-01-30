import { useReducer } from "react";
import PasswordReducer from "../reducers/PasswordReducer";

const init_state = {
    value: '',
    is_valid: false
};

const PasswordHandler = () => {
    const [passwordState, dispatchPassword] = useReducer(PasswordReducer, init_state);

    const { is_valid: password_is_valid } = passwordState;

    const passwordChangeHandler = (event: any) => {
        dispatchPassword({
            type: 'USER_INPUT',
            value: event.target.value
        });
    };

    function validatePasswordHandler(): void {
        dispatchPassword({
            type: 'USER_BLUR'
        });
    }

    return {
        password_is_valid,
        passwordState,
        passwordChangeHandler,
        validatePasswordHandler,
    }
}

export default PasswordHandler;