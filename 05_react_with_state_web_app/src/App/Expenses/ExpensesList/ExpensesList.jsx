import "./ExpensesList.scss";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0)
    return <div className="no-items-found">No expenses found.</div>;

  const checkFilterOnExpense = (expense) => {
    return (
      Number(props.year_selected) === 0 ||
      Number(expense.date.getFullYear()) === Number(props.year_selected)
    );
  };

  return (
    <div className="ExpensesList">
      {props.expenses.map(
        (expense, index) =>
          checkFilterOnExpense(expense) && (
            <ExpenseItem
              key={index}
              expense={expense}
              deleteExpense={props.deleteExpense}
            />
          )
      )}
    </div>
  );
};

export default ExpensesList;
