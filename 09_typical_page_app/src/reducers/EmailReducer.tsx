import EmailAction from "../interfaces/EmailAction";
import EmailState from "../interfaces/EmailState";

const init_state: EmailState = {
  value: "",
  is_valid: false,
};

const EmailReducer = (state: EmailState, action: EmailAction): EmailState => {
  if (action.type === "USER_INPUT") {
    // Ensure we always return a string for value, even if action.value is undefined
    const newValue = action.value ?? state.value;
    return {
      value: newValue,
      is_valid: newValue.includes("@"),
    };
  }

  if (action.type === "USER_BLUR") {
    return {
      value: state.value,
      is_valid: state.value.includes("@"),
    };
  }

  return init_state;
};

export default EmailReducer;
