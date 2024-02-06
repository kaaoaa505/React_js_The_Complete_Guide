import './App.scss';

import Header from '../components/Layout/Header/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import { useState } from 'react';

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
    <div className="App">
      {showCart && <Cart hideCart={onHideCart}  />}
      
      <Header showCart={onShowCart} />
      <Meals />
    </div>
  );
}

export default App;
