import './Home.scss';

import { useContext } from 'react';

import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';
import AuthContext from '../../store/AuthContext';

const Home = (props: any) => {
  const ctx = useContext(AuthContext);

  return (
    <Card className="Home">
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
