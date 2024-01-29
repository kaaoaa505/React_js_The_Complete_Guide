import AuthContext from '../../../store/AuthContext';
import './Navigation.scss';

const Navigation = (props: any) => {
  return (
    <AuthContext.Consumer>
      {ctx => (
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
                    <button onClick={props.onLogout}>Logout</button>
                  </li>
                )}
              </ul>
            </nav>
      )}

    </AuthContext.Consumer>
  );
};

export default Navigation;
