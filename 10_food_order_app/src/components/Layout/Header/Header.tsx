import './Header.scss';
import MealsImage from '../../../assets/meals.jpg';
import CartButton from '../../UI/CartButton/CartButton';

const Header = (props: any) => {

    return (
        <div className="Header">
            <header>
                <h1>ReactMeals</h1>
                <CartButton onClick={props.showCart} />
            </header>

            <div className='cover'>
                <img src={MealsImage} alt="" />
            </div>
        </div>
    )
}

export default Header;