import './Expenses.css';

import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {
    return (
        <div className="Expenses">
            {props.expenses.map((expense, index) => (
                <ExpenseItem key={index} expense={expense} />
            ))}
        </div>
    );
}

export default Expenses;