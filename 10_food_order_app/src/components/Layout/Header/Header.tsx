import './Header.scss';
import MealsImage from '../../../assets/meals.jpg';

const Header = () => {
    return (
        <div className="Header">
            <header>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>

            <div className='cover'>
                <img src={MealsImage} alt="" />
            </div>
        </div>
    )
}

export default Header;