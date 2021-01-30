import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { CountContext } from "../../context/CountContext";
import { techLabels } from "../../data/techs";

const BarChart = () => {
  const [count, setCount] = useContext(CountContext);
  const data = {
    labels: techLabels,
    datasets: [
      {
        label: "Job Count",
        backgroundColor: "rgba(0, 173, 181, .7)",
        borderColor: "#222831",
        borderWidth: 2,
        hoverBackgroundColor: "#222831",
        hoverBorderColor: "rgba(0, 173, 181, 1)",
        data: [
          count.JavaScript,
          count.Python,
          count.PHP,
          count.Java,
          count.Go,
          count.React,
          count.Vue,
          count.Angular,
          count.Node,
          count.TypeScript,
          count.Swift,
          count.Kotlin,
          count.Ruby,
          count.Dart,
        ],
      },
    ],
  };
  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarChart;
