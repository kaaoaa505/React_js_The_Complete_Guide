import './GoalItem.scss';

const GoalItem = (props: any) => {
    const deleteGoalItem = () => {
        props.onDelete(props.id);
    };

    return (
        <li className="GoalItem" onClick={deleteGoalItem}>
            {props.children}
        </li>
    );
};

export default GoalItem;
