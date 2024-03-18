import React from 'react';
import './Input.scss';

const Input = React.forwardRef(
    (props: any, ref: React.ForwardedRef<any>) => {
        return (
            <div className='Input'>
                <label htmlFor={props.id}>{props.label}</label>
                <input ref={ref} id={props.id} {...props.attr} />
            </div>
        );
    }
);

export default Input;