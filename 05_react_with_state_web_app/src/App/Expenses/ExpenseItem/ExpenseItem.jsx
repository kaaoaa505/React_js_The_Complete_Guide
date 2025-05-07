import "./ExpenseItem.scss";

import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  const deleteExpense = (event) => {
    let data_id = event.target.attributes["data-id"].value;
    props.deleteExpense(data_id);
  };
  
  console.log('ExpenseItem is called');
  

  return (
    <div className="ExpenseItem">
      <ExpenseDate date={props.expense.date} />

      <div className="description">
        <h2>{props.expense.title}</h2>
        <div className="price">${props.expense.amount}</div>
      </div>

      <button className="delete-button" data-id={props.expense.id} onClick={deleteExpense}>
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
