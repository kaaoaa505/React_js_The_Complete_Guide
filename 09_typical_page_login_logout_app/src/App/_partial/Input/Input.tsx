import React, { useEffect, useRef } from "react";
import "./Input.scss";

const Input = React.forwardRef((props: any, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!props.valid) {
      inputRef.current?.focus();
    }
  }, [props.valid]);

  return (
    <div className="Input">
      <div
        className={!props.valid && props.value ? "control invalid" : "control"}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
          autoFocus={false}
          type={props.type}
          id={props.id}
          name={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={inputRef}
          autoComplete={"new-" + props.id}
          title={props.id}
        />
      </div>
    </div>
  );
});

export default Input;
