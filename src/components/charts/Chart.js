import "./Chart.css";
import { useMediaQuery } from "react-responsive";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";

const Chart = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1124px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isXsMobile = useMediaQuery({ query: "(max-width: 400px)" });

  const getChartH = () => {
    if (isXsMobile) {
      return 300;
    } else if (isMobile) {
      return 400;
    } else if (isTablet) {
      return 500;
    } else {
      return 600;
    }
  };
  const getChartW = () => {
    if (isXsMobile) {
      return 300;
    } else if (isMobile) {
      return 400;
    } else if (isTablet) {
      return 500;
    } else {
      return 900;
    }
  };

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  return (
    <div style={{ margin: "15px auto" }}>
      <XYPlot height={getChartH()} width={getChartW()}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="yellow" />
      </XYPlot>
    </div>
  );
};

export default Chart;
