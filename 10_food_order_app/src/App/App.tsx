import './App.scss';

import { useState } from 'react';

import Header from '../components/Layout/Header/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from '../store/CartProvider';

function App() {
  const [show_cart, $show_cart] = useState(false);

  const cartHandler = (cart_show: boolean) => {
    $show_cart(cart_show);
  }

  const onShowCart = () => {
    cartHandler(true);
  }

  const onHideCart = () => {
    cartHandler(false);
  }

  return (
    <CartProvider>
      <div className="App">
        {show_cart && <Cart hideCart={onHideCart} />}

        <Header showCart={onShowCart} />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
