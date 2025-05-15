
import './Button.scss';

const Button = (props: any) => {
  return (
    <button
      type={props.type || 'button'}
      className={`Button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
