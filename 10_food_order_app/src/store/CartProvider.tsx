import CartContext from "./CartContext";
import CartInit from "./CartInit";

const CartProvider = (props: any) => {
    const addItem = (item: any) => {};

    const removeItem = (id: number) => {};

    const context = CartInit;
    context.addItem = addItem;
    context.removeItem = removeItem;

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;