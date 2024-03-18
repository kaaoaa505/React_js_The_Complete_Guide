import { useRef, useState } from 'react';
import Input from '../../../components/UI/Input/Input';
import './MealItemForm.scss';

const MealItemForm = (props: any) => {
    const amountRef = useRef<HTMLInputElement>();
    const [valid_amount, $valid_amount] = useState(true);

    const submitHandler = (event: any) => {
        event.preventDefault();

        const amount_html_input: HTMLInputElement = amountRef.current as HTMLInputElement;

        const amount_value = Number(amount_html_input.value);

        if (amount_value < 1 || amount_value > 5) {
            $valid_amount(false);

            return;
        }

        props.addToCart(amount_value);
    };

    return (
        <form className='MealItemForm' onSubmit={submitHandler}>
            <Input
                ref={amountRef}
                label='Amount'
                attr={
                    {
                        title: 'amount',
                        type: 'number',
                        min: 1,
                        max: 5,
                        step: 1,
                        defaultValue: 1
                    }
                } />
            {!valid_amount && <small>Please, Enter a valid amount between (1 & 5).</small>}
            <br />
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm;