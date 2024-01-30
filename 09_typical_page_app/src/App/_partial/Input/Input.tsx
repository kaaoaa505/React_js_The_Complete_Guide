import './Input.scss';

const Input = (props: any) => {
    return (
        <div className="Input">
            <div className={!props.valid ? 'control invalid' : 'control'}>
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    type={props.type}
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            </div>
        </div>
    )
}

export default Input;