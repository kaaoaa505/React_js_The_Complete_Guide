import './App.scss';

import { useState } from 'react';

import Header from '../components/Layout/Header/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from '../store/CartProvider';

function App() {
  const [showCart, $showCart] = useState(false);

  const cartHandler = (cart_show: boolean) => {
    $showCart(cart_show);
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
        {showCart && <Cart hideCart={onHideCart} />}

        <Header showCart={onShowCart} />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
