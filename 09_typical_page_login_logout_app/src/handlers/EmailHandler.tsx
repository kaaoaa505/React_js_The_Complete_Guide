import { useReducer, Reducer } from "react";
import EmailReducer from "../reducers/EmailReducer";

interface EmailState {
  value: string;
  is_valid: boolean;
}

interface EmailAction {
  type: string;
  value?: string;
}

interface EmailHandlerReturn {
  email_is_valid: boolean;
  emailState: EmailState;
  emailChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateEmailHandler: () => void;
}

const init_state: EmailState = {
  value: "",
  is_valid: false,
};

const EmailHandler = (): EmailHandlerReturn => {
  const [emailState, dispatchEmail] = useReducer<
    Reducer<EmailState, EmailAction>
  >(EmailReducer, init_state);

  const { is_valid: email_is_valid } = emailState;

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({
      type: "USER_INPUT",
      value: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "USER_BLUR",
    });
  };

  return {
    email_is_valid,
    emailState,
    emailChangeHandler,
    validateEmailHandler,
  };
};

export default EmailHandler;
