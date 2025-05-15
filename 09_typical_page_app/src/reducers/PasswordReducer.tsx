import PasswordAction from "../interfaces/PasswordAction";
import PasswordState from "../interfaces/PasswordState";

const init_state: PasswordState = {
  value: "",
  is_valid: false,
};

const PasswordReducer = (state: PasswordState, action: PasswordAction): PasswordState => {
  if (action.type === "USER_INPUT") {
    // Ensure we always return a string for value, even if action.value is undefined
    const newValue = action.value ?? state.value;

    return {
      value: newValue,
      is_valid: action.value ? action.value.trim().length > 6 : false,
    };
  }

  if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      is_valid: state.value.trim().length > 6,
    };
  }

  return init_state;
};

export default PasswordReducer;
