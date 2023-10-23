import './Expenses.css';

import { useState } from 'react';

import ExpenseCreate from './ExpenseCreate/ExpenseCreate';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import Card from '../_components/Card/Card';

const Expenses = (props) => {
    const [yearSelected, $yearSelected] = useState(0);

    const filterChange = (year) => {
        $yearSelected(year);
        console.log(yearSelected);
    };

    return (
        <div className="Expenses">
            <ExpenseCreate onCreateExpense={props.onCreateExpense} />

            <Card className="bg-gray">
                <ExpensesFilter selected={yearSelected} onChangeFilter={filterChange} />

                {
                    props.expenses.length === 0 ? 
                    <div className='no-items-found'>No expenses found.</div>
                    :
                    props.expenses.map((expense, index) => (
                        (Number(yearSelected) === 0 || Number(expense.date.getFullYear()) === Number(yearSelected)) && <ExpenseItem key={index} expense={expense} deleteExpense={props.deleteExpense} />
                    ))
                }
            </Card>
        </div>
    );
}

export default Expenses;