import CART_ITEMS_EXAMPLES from '../../components/Examples/CART_ITEMS_EXAMPLES';
import './Cart.scss';

const Cart = () => {
    const cart_items_list = CART_ITEMS_EXAMPLES.map(item =>
        <li key={item.id}>
            {item.name}
        </li>
    );

    return (
        <div className='Cart'>
            <ul className='items'>
                {cart_items_list}
            </ul>

            <div className='total'>
                <span>Total</span>
                <span>132</span>
            </div>

            <div className='actions'>
                <button>Close</button>
                <button>Order</button>
            </div>
        </div>
    )
}

export default Cart;