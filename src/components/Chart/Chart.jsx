import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
