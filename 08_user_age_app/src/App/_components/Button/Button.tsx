import './Button.scss';

const Button = (props: any) => {
    return (
        <button type="submit" className="Button">
            {props.children}
        </button>
    );
};

export default Button;