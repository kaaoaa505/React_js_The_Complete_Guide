import "./ExpenseCreate.css";

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseCreate = (props) => {
  const createExpense = (expenseData) => {
    expenseData = {
      ...expenseData,
      // id: Math.ceil(Math.random() * (new Date()).getTime())
      id: new Date().getTime(),
    };

    props.onCreateExpense(expenseData);
  };
  return (
    <div className="ExpenseCreate">
      <ExpenseForm onSubmitExpenseForm={createExpense} />
    </div>
  );
};

export default ExpenseCreate;
