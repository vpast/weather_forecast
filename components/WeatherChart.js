import Chart from 'chart.js/auto';

const WeatherChart = ({data}) => {
  const ctx = document.getElementById("weatherChart");
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
  return (
    <canvas id="weatherChart"></canvas>
  );
};

export default WeatherChart;