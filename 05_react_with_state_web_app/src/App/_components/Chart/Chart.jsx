import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  return (
    <div className="Chart">
      {props.points.map((p, i) => (
        <ChartBar key={i} point={p} max={props.max} />
      ))}
    </div>
  );
};

export default Chart;
