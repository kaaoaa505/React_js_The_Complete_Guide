import './Expenses.css';

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from '../Card/Card';

function Expenses(props) {
    return (
        <div className="Expenses">
            <Card className="bg-gray">
            {props.expenses.map((expense, index) => (
                <ExpenseItem key={index} expense={expense} />
            ))}
            </Card>
        </div>
    );
}

export default Expenses;