const init_state = {
    value: '',
    is_valid: false
};

const PasswordReducer = (state: any, action: any) => {
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

export default PasswordReducer;