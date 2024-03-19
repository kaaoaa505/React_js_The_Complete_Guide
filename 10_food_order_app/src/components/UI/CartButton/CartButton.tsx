import './CartButton.scss';

import CartIconWhite from '../CartIcon/CartIconWhite';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/CartContext';

const CartButton = (props: any) => {
    const [button_in_animation, $button_in_animation] = useState(false);

    const cart_context = useContext(CartContext);
    const { items } = cart_context;

    const items_count = items.reduce((index: number, item: any) => {
        return index + item.amount;
    }, 0);

    const cart_button_classes = `CartButton ${button_in_animation === true ? 'bump' : ''}`;

    useEffect(() => {
        if (items.length === 0) return;

        $button_in_animation(true);

        const button_animation_timer = setTimeout(() => {
            $button_in_animation(false);
        }, 300);

        return () => {
            clearTimeout(button_animation_timer);
        };

    }, [items]);

    return (
        <button type='button' className={cart_button_classes} onClick={props.onClick}>
            <span className='cart_icon'><CartIconWhite /></span>
            <span className='cart_txt'>Cart &nbsp;</span>
            <span className='cart_count'>({items_count})</span>
        </button>
    )
}

export default CartButton;