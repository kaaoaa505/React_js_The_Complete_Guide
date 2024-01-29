import './MainHeader.scss';

import Navigation from '../Navigation/Navigation';

const MainHeader = (props: any) => {
    return (
        <header className="MainHeader">
            <h1>A Typical Page</h1>
            <Navigation onLogout={props.onLogout} />
        </header>
    );
};

export default MainHeader;
    