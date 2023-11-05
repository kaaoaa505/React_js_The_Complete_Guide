import './Users.scss';

const Users = (props: any) => {
    return (
        <div className="Users">
            <ul>
                {props.users.map((user: any, index: number) => (
                    <li key={index}>{user.name}: {user.age} years old.</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;