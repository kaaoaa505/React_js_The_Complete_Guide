const init_state = {
    value: '',
    is_valid: false
};

const EmailReducer = (state: any, action: any) => {
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

export default EmailReducer;