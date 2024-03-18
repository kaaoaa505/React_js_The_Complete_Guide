import CartInit from "./CartInit";

const CartReducer = (state: any, action: any) => {
    if (action.type === 'ADD') {
        const items = state.items.concat(action.item);
        const total_amount = Number(state.total_amount) + (Number(action.item.price) * Number(action.item.amount));

        return {
            items: items,
            total_amount: total_amount
        }
    }

    if (action.type === 'REMOVE') {
        //todo
    }

    return CartInit;
};

export default CartReducer;