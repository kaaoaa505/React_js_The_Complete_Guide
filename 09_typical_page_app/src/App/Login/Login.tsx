import { useEffect, useState, useContext } from "react";

import "./Login.scss";
import Card from "../_partial/Card/Card";
import Button from "../_partial/Button/Button";
import AuthContext from "../../store/AuthContext";
import EmailHandler from "../../handlers/EmailHandler";
import PasswordHandler from "../../handlers/PasswordHandler";
import Input from "../_partial/Input/Input";

const Login = (props: any) => {
  const ctx = useContext(AuthContext);

  const emailHandler = EmailHandler();
  const passwordHandler = PasswordHandler();

  const [formIsValid, $formIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      $formIsValid(
        emailHandler.email_is_valid && passwordHandler.password_is_valid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailHandler.email_is_valid, passwordHandler.password_is_valid]);

  const submitHandler = (event: any) => {
    event.preventDefault();

    ctx.onLogin(
      emailHandler.emailState.value,
      passwordHandler.passwordState.value
    );
  };

  return (
    <Card className="Login">
      <form onSubmit={submitHandler} autoComplete="off">
        <input
          autoComplete="false"
          name="hidden"
          type="text"
          style={{ display: "none" }}
        />

        <Input
          valid={emailHandler.emailState.is_valid}
          id="email"
          type="email"
          label="E-Mail"
          value={emailHandler.emailState.value}
          onChange={emailHandler.emailChangeHandler}
          onBlur={emailHandler.validateEmailHandler}
        />

        <Input
          valid={passwordHandler.passwordState.is_valid}
          id="password"
          type="password"
          label="Password"
          value={passwordHandler.passwordState.value}
          onChange={passwordHandler.passwordChangeHandler}
          onBlur={passwordHandler.validatePasswordHandler}
        />

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
