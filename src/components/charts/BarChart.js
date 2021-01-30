import React, { useContext, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../context/AppContext";
import { CountContext } from "../../context/CountContext";
import { techLabels } from "../../data/techs";

const BarChart = () => {
  const [count, setCount] = useContext(CountContext);

  console.log("init", count);

  const data = {
    labels: techLabels,
    datasets: [
      {
        label: count.chartLabel,
        backgroundColor: "rgba(0, 173, 181, .7)",
        borderColor: "#222831",
        borderWidth: 2,
        hoverBackgroundColor: "#222831",
        hoverBorderColor: "rgba(0, 173, 181, 1)",
        data: [
          count.chartCount.JavaScript,
          count.chartCount.Python,
          count.chartCount.PHP,
          count.chartCount.Java,
          count.chartCount.Go,
          count.chartCount.React,
          count.chartCount.Vue,
          count.chartCount.Angular,
          count.chartCount.Node,
          count.chartCount.TypeScript,
          count.chartCount.Swift,
          count.chartCount.Kotlin,
          count.chartCount.Ruby,
          count.chartCount.Dart,
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
