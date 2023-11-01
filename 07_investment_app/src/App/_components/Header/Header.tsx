import './Header.scss';

import logo from '../../../assets/images/investment-tree.png';

const Header = () => {
    return (
        <div className="Header">
            <header className="header">
                <img src={logo} alt="logo" />
                <h1>Investment Calculator</h1>
            </header>
        </div>
    )
};

export default Header;