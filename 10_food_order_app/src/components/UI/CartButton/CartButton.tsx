import './CartButton.scss';

import CartIconWhite from '../CartIcon/CartIconWhite';

const CartButton = (props: any) => {
    return (
        <button type='button' className='CartButton' onClick={props.onClick}>
            <span className='cart_icon'><CartIconWhite /></span>
            <span className='cart_txt'>Cart &nbsp;</span>
            <span className='cart_count'>(123)</span>
        </button>
    )
}

export default CartButton;