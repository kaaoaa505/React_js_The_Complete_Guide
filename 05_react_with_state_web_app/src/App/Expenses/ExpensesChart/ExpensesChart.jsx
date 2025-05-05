import Chart from "../../_components/Chart/Chart";

const ExpensesChart = (props) => {
  const checkFilterOnExpense = (expense) => {
    return (
      Number(props.year_selected) === 0 ||
      Number(expense.date.getFullYear()) === Number(props.year_selected)
    );
  };

  const months = [];
  for (let i = 1; i <= 12; i++) {
    const date = new Date(`2000-${i}-01`);
    const month = date.toLocaleString("default", { month: "long" });
    months.push({
      number: i,
      name: month,
    });
  }

  const points_by_titles = [];
  const data_by_months = [];
  let max_by_titles = 0;
  props.expenses.map((expense) => {
    if (checkFilterOnExpense(expense)) {
      points_by_titles.push({
        label: expense.title,
        value: expense.amount,
      });

      if (expense.amount > max_by_titles) max_by_titles = expense.amount;

      if (
        data_by_months[
          expense.date.toLocaleString("default", { month: "long" })
        ]
      ) {
        data_by_months[
          expense.date.toLocaleString("default", { month: "long" })
        ] += expense.amount;
      } else {
        data_by_months[
          expense.date.toLocaleString("default", { month: "long" })
        ] = expense.amount;
      }
    }
  });

  let max_by_months = 0;
  const points_by_months = [];
  for (const [key, value] of Object.entries(data_by_months)) {
    points_by_months.push({
      label: key,
      value: value,
    });

    if (value > max_by_months) max_by_months = value;
  }

  return (
    <div className="ExpensesChart">
      <h2>Chart By Title</h2>
      <Chart points={points_by_titles} max={max_by_titles} />
      <hr />
      <h2>Chart By Month</h2>
      <Chart points={points_by_months} max={max_by_months} />
    </div>
  );
};

export default ExpensesChart;
