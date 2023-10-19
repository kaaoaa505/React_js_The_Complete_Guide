import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
    return (
        <div className="ExpenseItem">
            <ExpenseDate date={props.expense.date} />

            <div className="description">
                <h2>{props.expense.title}</h2>
                <div className="price">${props.expense.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;