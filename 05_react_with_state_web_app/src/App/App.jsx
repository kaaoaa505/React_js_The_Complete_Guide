import { useState } from 'react';
import './App.css';
import Expenses from './Expenses/Expenses';

const initial_expenses = [
  {
    id: 1,
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date('2020-7-14'),
  },
  {
    id: 2,
    title: 'New TV',
    amount: 799.49,
    date: new Date('2021-2-12')
  },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date('2021-2-28'),
  },
  {
    id: 4,
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date('2021-5-12'),
  },
  {
    id: 5,
    title: 'Just for test',
    amount: 999.99,
    date: new Date('2023-10-23'),
  },
];

const App = () => {
  const [expenses, $expenses] = useState([
    ...initial_expenses
  ]);

  const addExpense = (expense) => {
    $expenses(old => {
      return [
        ...old,
        expense
      ];
    });

    console.log(expenses);
  }

  const deleteExpense = (expense_id) => {

    $expenses(old => {
      const result = [
        ...old.filter(expense => Number(expense.id) !== Number(expense_id)).slice()
      ];

      console.log(`$expenses result is: `, result);

      return result;
    });
  }

  return (
    <div className="App">
      <Expenses expenses={expenses.slice()} onCreateExpense={addExpense} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
