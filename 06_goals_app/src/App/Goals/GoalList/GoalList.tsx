import './GoalList.scss';

import GoalItem from '../GoalItem/GoalItem';

const GoalList = (props: any) => {
    return (
        <ul className="GoalList">
            {props.items.map((goal: any) => (
                <GoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </GoalItem>
            ))}
        </ul>
    );
};

export default GoalList;
