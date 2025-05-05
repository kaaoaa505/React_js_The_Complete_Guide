import "./Expenses.css";

import { useState } from "react";

import ExpensesChart from "./ExpensesChart/ExpensesChart";
import ExpenseCreate from "./ExpenseCreate/ExpenseCreate";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

import Card from "../_components/Card/Card";

const Expenses = (props) => {
  const [year_selected, $year_selected] = useState(0);

  const filterChange = (year) => {
    $year_selected(year);
  };

  return (
    <div className="Expenses">
      <ExpenseCreate onCreateExpense={props.onCreateExpense} />

      <Card className="bg-gray">
        <ExpensesFilter
          year_selected={year_selected}
          onChangeFilter={filterChange}
        />

        <ExpensesList
          expenses={props.expenses}
          year_selected={year_selected}
          deleteExpense={props.deleteExpense}
        />

        <ExpensesChart
          expenses={props.expenses}
          year_selected={year_selected}
        />
      </Card>
    </div>
  );
};

export default Expenses;
