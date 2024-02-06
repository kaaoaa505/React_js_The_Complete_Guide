import './Cart.scss';

import CART_ITEMS_EXAMPLES from '../../components/Examples/CART_ITEMS_EXAMPLES';
import Modal from '../../components/UI/Modal/Modal';

const Cart = (props: any) => {
    const cart_items_list = CART_ITEMS_EXAMPLES.map(item =>
        <li key={item.id}>
            {item.name}
        </li>
    );

    return (
        <Modal onClick={props.hideCart}>
            <div className='Cart'>
                <ul className='items'>
                    {cart_items_list}
                </ul>

                <div className='total'>
                    <span>Total Amount: </span>
                    <span>132</span>
                </div>

                <div className='actions'>
                    <button className='btn_inverse' type='button' onClick={props.hideCart}>Close</button>

                    <button className='btn_main' type='button'>Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;