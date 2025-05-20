import CartInit from "./CartInit";

const CartReducer = (state: any, action: any) => {
  let items = state.items.slice();

  if (action.type === "ADD") {
    let total_amount = Number(state.total_amount);

    const item_found_index = items.findIndex(
      (item: any) => item.id === action.item.id
    );

    if (item_found_index >= 0) {
      items[item_found_index]["amount"] += action.item.amount;
      total_amount += Number(action.item.price);
    } else {
      items = items.concat(action.item);
      total_amount += Number(action.item.price) * Number(action.item.amount);
    }

    return {
      items: items.slice(),
      total_amount: total_amount,
    };
  }

  if (action.type === "REMOVE") {
    let total_amount = Number(state.total_amount);

    const item_found_index = items.findIndex(
      (item: any) => item.id === action.id
    );

    if (item_found_index >= 0) {
      total_amount -= Number(items[item_found_index].price);

      if (items[item_found_index]["amount"] === 1) {
        items = items.slice().filter((item: any) => item.id !== action.id);
      } else {
        items[item_found_index]["amount"] -= 1;
      }
    }

    return {
      items: items.slice(),
      total_amount: total_amount,
    };
  }

  return CartInit;
};

export default CartReducer;
