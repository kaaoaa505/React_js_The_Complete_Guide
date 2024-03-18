import { useReducer } from "react";
import CartContext from "./CartContext";
import CartInit from "./CartInit";
import CartReducer from "./CartReducer";

const CartProvider = (props: any) => {
    const [cart, $cart] = useReducer(CartReducer, CartInit);
    
    const addItem = (item: any) => {
        $cart({
            type: 'ADD',
            item: item,
        });
    };

    const removeItem = (id: number) => {
        $cart({
            type: 'REMOVE',
            id: id,
        });
    };

    const context = {
        items: cart.items,
        addItem: (item: any) => {},
        removeItem: (id: number) => {},
        total_amount: cart.total_amount,
    };

    context.addItem = addItem;
    context.removeItem = removeItem;

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;