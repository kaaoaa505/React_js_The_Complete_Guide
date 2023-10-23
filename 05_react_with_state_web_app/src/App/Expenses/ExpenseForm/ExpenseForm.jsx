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
        $date(new Date(event.target.value));
    };

    const formSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title,
            amount,
            date
        };

        props.onSubmitExpenseForm(expenseData);
    };

    return (
        <form className="ExpenseForm" onSubmit={formSubmit}>
            <div className="controls">
                <div className="control">
                    <label htmlFor='title'>Title</label>
                    <input
                        id='title'
                        type="text"
                        value={title}
                        onChange={titleChange}
                    />
                </div>

                <div className="control">
                    <label htmlFor='amount'>Amount</label>
                    <input
                        id='amount'
                        type="number"
                        value={amount}
                        onChange={amountChange}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="control">
                    <label htmlFor='date'>Date</label>
                    <input
                        id='date'
                        type="date"
                        value={date.toISOString().slice(0, 10)}
                        onChange={dateChange}
                        min="2023-01-01"
                        max="2023-12-30"
                    />
                </div>

                <div className="actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;