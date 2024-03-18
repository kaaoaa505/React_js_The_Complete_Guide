import CartInit from "./CartInit";

const CartReducer = (state: any, action: any) => {
    if (action.type === 'ADD') {
        let items = state.items.slice();
        const total_amount = Number(state.total_amount) + (Number(action.item.price) * Number(action.item.amount));

        const item_found_index = items.findIndex((item: any) => item.id === action.item.id);

        if(item_found_index >= 0){
            items[item_found_index]['amount'] += action.item.amount;
        }else{
            items = items.concat(action.item);
        }

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