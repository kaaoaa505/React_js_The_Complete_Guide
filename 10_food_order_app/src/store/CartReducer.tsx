import CartInit from "./CartInit";

const CartReducer = (state: any, action: any) => {
    let items = state.items.slice();

    if (action.type === 'ADD') {
        const total_amount = Number(state.total_amount) + (Number(action.item.price) * Number(action.item.amount));

        const item_found_index = items.findIndex((item: any) => item.id === action.item.id);

        if (item_found_index >= 0) {
            items[item_found_index]['amount'] += action.item.amount;
        } else {
            items = items.concat(action.item);
        }

        return {
            items: items.slice(),
            total_amount: total_amount
        }
    }

    if (action.type === 'REMOVE') {
        let total_amount = Number(state.total_amount);

        const item_found_index = items.findIndex((item: any) => item.id === action.id);

        if (item_found_index >= 0) {
            total_amount -= Number(items[item_found_index].price);

            if (items[item_found_index]['amount'] === 1) {
                delete items[item_found_index];

                let new_items_array = [];
                for (let i = 0; i < items.length; i++) {
                    items[i] && new_items_array.push(items[i]);
                }

                items = new_items_array;
            } else {
                items[item_found_index]['amount'] -= 1;
            }
        }

        return {
            items: items.slice(),
            total_amount: total_amount
        }
    }

    return CartInit;
};

export default CartReducer;