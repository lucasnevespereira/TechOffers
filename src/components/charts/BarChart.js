import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["PHP", "JavaScript", "Python", "Golang", "React", "Swift", "Java"],
  datasets: [
    {
      label: "Job Count",
      backgroundColor: "rgba(0, 173, 181, .7)",
      borderColor: "#222831",
      borderWidth: 2,
      hoverBackgroundColor: "#222831",
      hoverBorderColor: "rgba(0, 173, 181, 1)",
      data: [858, 1567, 769, 554, 976, 345, 898],
    },
  ],
};

const BarChart = () => {
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
