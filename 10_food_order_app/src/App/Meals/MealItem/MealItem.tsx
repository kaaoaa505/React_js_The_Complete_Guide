import './MealItem.scss';

import { useContext } from 'react';

import MealItemForm from '../MealItemForm/MealItemForm';
import CartContext from '../../../store/CartContext';

const MealItem = (props: any) => {
    const cart_ctx = useContext(CartContext);

    const addToCart = (amount_value: number) => {
        cart_ctx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            price: props.meal.price,
            amount: amount_value
        });
    };

    return (
        <div className='MealItem'>
            <div className='info'>
                <h3>{props.meal.name}</h3>
                <p>{props.meal.description}</p>
                <span><b>$</b>{props.meal.price.toFixed(2)}</span>
            </div>

            <div className='form'>
                <MealItemForm addToCart={addToCart} meal_id={props.meal.id} />
            </div>
        </div>
    )
}

export default MealItem;