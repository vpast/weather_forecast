import Chart from 'chart.js/auto';
import { useRef, useEffect, useState } from "react";

const WeatherChart = ({data}) => {
  const [myChart, setMyChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [{
          label: "Temperature",
          data: [data.daily[0].temp.day, data.daily[1].temp.day, data.daily[2].temp.day, data.daily[3].temp.day],
          cubicInterpolationMode: 'monotone',
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(189, 255, 255)',
          tension: 0.2
        }],
      },
      options: {
        responsive: true,
        y: {
          max: 40,
        },
      },
    });
    setMyChart(myChart);
  }, [chartRef])

  useEffect(() => {
    if (!myChart) return;
    myChart.data.datasets[0].data = [data.daily[0].temp.day, data.daily[1].temp.day, data.daily[2].temp.day, data.daily[3].temp.day];
    myChart.update();
  }, [data])
  
  return (
    <canvas ref={chartRef}></canvas>
  );
};

export default WeatherChart;