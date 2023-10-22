import './ExpenseItem.css';

import { useState } from 'react';

import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
    const [title, $title] = useState(props.expense.title);
    const [amount, $amount] = useState(props.expense.amount);
    const [date, $date] = useState(props.expense.date);

    const editExpense = (event) => {
        let data_id = event.target.attributes['data-id'].value;
        console.log(data_id);
        $title(data_id);
        $amount(data_id*amount);
    }

    return (
        <div className="ExpenseItem">
            <ExpenseDate date={date} />

            <div className="description">
                <h2>{title}</h2>
                <div className="price">${amount}</div>
            </div>

            <button data-id={props.expense.id} id={'btn-' + props.expense.id} onClick={editExpense}>Edit</button>
        </div>
    );
}

export default ExpenseItem;