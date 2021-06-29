import Chart, { BubbleController } from "chart.js/auto";
import { useRef, useEffect, useState } from "react";

const WeatherChart = ({ data, activeDay }) => {
  const [myChart, setMyChart] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const temp = [];

    for (let i = 0; i <= 3; i++) {
      temp.push(Math.round(data.daily[i].temp.day));
    }

    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "mixed",
      data: {
        labels: ["1", "2", "3", "4"],
        datasets: [
          {
            type: "bubble",
            label: "Day",
            data: [
              {
                x: 1,
                y: Math.round(data.daily[0].temp.day),
                r: 5,
              },
            ],
            backgroundColor: "rgb(255, 99, 132)",
          },
          {
            type: "line",
            label: "Temperature Day",
            data: temp,
            cubicInterpolationMode: "monotone",
            fill: true,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(189, 255, 255)",
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        y: {
          max: 40,
        },
      },
    });
    setMyChart(myChart);
  }, [chartRef]);

  useEffect(() => {
    if (!myChart) return;
    const temp = [];

    for (let i = 0; i <= 3; i++) {
      temp.push(Math.round(data.daily[i].temp.day));
    }
    myChart.data.datasets[1].data = temp;
    myChart.update();
  }, [data]);

  useEffect(() => {
    if (!myChart) return;
    if (activeDay === null) return;
    myChart.data.datasets[0].data = [
      {
        x: activeDay + 1,
        y: Math.round(data.daily[activeDay].temp.day),
        r: 5,
      },
    ];
    myChart.update();
  }, [activeDay, data]);

  return <canvas ref={chartRef}></canvas>;
};

export default WeatherChart;
