import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div className="ExpenseDate">
      <div className="date">
        <div className="month">
          {props.date.toLocaleString("default", { month: "long" })}
        </div>
        <div className="year">{props.date.getFullYear()}</div>
        <div className="day">
          {props.date.toLocaleString("default", { day: "2-digit" })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseDate;
