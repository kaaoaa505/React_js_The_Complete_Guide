import './Home.scss';

import Card from '../_partial/Card/Card';
import Button from '../_partial/Button/Button';

const Home = (props: any) => {
  return (
    <Card className="Home">
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
