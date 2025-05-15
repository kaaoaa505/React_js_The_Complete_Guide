import { useContext } from 'react';
import AuthContext from '../../../store/AuthContext';
import './Navigation.scss';

const Navigation = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className="Navigation">
      <ul>
        {ctx.is_logged_in && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.is_logged_in && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.is_logged_in && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
