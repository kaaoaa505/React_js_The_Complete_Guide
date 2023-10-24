import './Button.css';

const Button = (props: any) => {
  return (
    <button type={props.type} className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
