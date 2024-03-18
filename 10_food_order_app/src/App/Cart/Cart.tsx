import './Cart.scss';

import { useContext } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = (props: any) => {
    const cart_ctx = useContext(CartContext);

    const cartHasItems = cart_ctx.items.length > 0;

    const removeItem = (id: number) => console.log('todo removeItem');
    const addItem = (item: any) => console.log('todo addItem');

    const orderAction = () => console.log('todo orderAction');

    const cartItems = cart_ctx.items.map((item: any) =>
        <CartItem key={item.id} item={item} removeItem={removeItem.bind(null, item.id)} addItem={addItem.bind(null, item)} />
    );

    const total_amount = `$${cart_ctx.total_amount.toFixed(2)}`;

    return (
        <Modal onClick={props.hideCart}>
            <div className='Cart'>
                <ul className='items'>
                    {cartItems}
                </ul>

                <div className='total'>
                    <span>Total Amount: </span>
                    <span>{total_amount}</span>
                </div>

                <div className='actions'>
                    <button className='btn_inverse' type='button' onClick={props.hideCart}>Close</button>

                    {cartHasItems && <button className='btn_main' type='button' onClick={orderAction}>Order</button>}
                </div>
            </div>
        </Modal>
    )
}

export default Cart;