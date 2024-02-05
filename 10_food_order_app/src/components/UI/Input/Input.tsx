import './Input.scss';

const Input = (props: any) => {
    return (
        <div className='Input'>
            <label htmlFor={props.id}>{props.label}</label> 
            <input id={props.id} {...props.attr} />
        </div>
    )
}

export default Input;