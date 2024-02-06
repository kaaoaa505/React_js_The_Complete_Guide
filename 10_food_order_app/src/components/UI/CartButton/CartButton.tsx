import './CartButton.scss';

import CartIconWhite from '../CartIcon/CartIconWhite';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';

const CartButton = (props: any) => {
    const cart_context = useContext(CartContext);

    const items = cart_context.items;
    const items_count = items.reduce((index: number, item: any) => {
        return index + item.amount;
    }, 0);

    return (
        <button type='button' className='CartButton' onClick={props.onClick}>
            <span className='cart_icon'><CartIconWhite /></span>
            <span className='cart_txt'>Cart &nbsp;</span>
            <span className='cart_count'>({items_count})</span>
        </button>
    )
}

export default CartButton;