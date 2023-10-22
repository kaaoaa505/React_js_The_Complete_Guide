import './ExpenseForm.css';

import { useState } from 'react';

const ExpenseForm = (props) => {
    const [title, $title] = useState('');
    const [amount, $amount] = useState(0);
    const [date, $date] = useState(new Date());

    const titleChange = (event) => {
        $title(event.target.value);
    };

    const amountChange = (event) => {
        $amount(Number(event.target.value));
    };

    const dateChange = (event) => {
        $date(event.target.value);
    };

    const formChange = (event) => {
        console.log(title);
        console.log(amount);
        console.log(date);
    };

    return (
        <form className="ExpenseForm" onChange={formChange}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>

                <div className="control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChange} min="0" step="0.01" />
                </div>

                <div className="control">
                    <label>Date</label>
                    <input type="date" onChange={dateChange} min="2023-01-01" max="2023-12-30" />
                </div>

                <div className="actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;