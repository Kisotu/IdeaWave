
import ReactApexCharts  from "react-apexcharts";

const series = [
  {
    name: "Series 1",
    data: [1, 2, 3, 4, 5],
  },
];

const chartOptions = {
  chart: {
    type: "area",
  },
  title: {
    text: 'User Gowth',
    align: 'left'
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2024-07-12",
      "2024-07-13",
      "2024-07-14",
      "2024-07-15",
      "2024-07-16",
    ],
  },
};

export const AreaChart = () => {
  return (
    <ReactApexCharts
      options={chartOptions}
      series={series}
      type='area'
      height={350}
    />
  );
};

export default AreaChart;
