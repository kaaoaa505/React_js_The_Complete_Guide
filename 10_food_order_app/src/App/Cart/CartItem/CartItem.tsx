import './CartItem.scss';

import CartIcon from '../CartIcon/CartIcon';

const CartItem = (props: any) => {
    const price = `$${props.item.price.toFixed(2)}`;

    return (
        <li className='CartItem'>
            <div className='info'>
                <h2>
                    <CartIcon />
                    {props.item.name}
                </h2>
                <div className='summary'>
                    <span className='price'>{price}</span>
                    <span className='amount'>x {props.item.amount}</span>
                </div>
            </div>
            <div className='actions'>
                <button onClick={props.removeItem}>−</button>
                <button onClick={props.addItem}>+</button>
            </div>
        </li>
    );
};

export default CartItem;