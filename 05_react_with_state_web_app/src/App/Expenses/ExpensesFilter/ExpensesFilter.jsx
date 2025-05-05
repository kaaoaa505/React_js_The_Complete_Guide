import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterChange = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const current_year = new Date().getFullYear();
  const years = [];
  for (let index = 0; index < 5; index++) {
    years.push(current_year - index);
  }

  return (
    <div className="ExpensesFilter">
      <div className="control">
        <label htmlFor="year_filter">Filter by year</label>
        <select
          id="year_filter"
          name="year_filter"
          value={props.year_selected ?? ""}
          onChange={filterChange}
        >
          <option key={0} value={0}>
            All
          </option>

          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
