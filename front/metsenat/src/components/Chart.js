import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as CharJS } from "chart.js/auto";

const Chart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
          datasets: [
            {
              label: "Homiylar",
              data: [400, 1200, 800, 3000, 7000, 32000, 100, 500, 1000, 5000, 10000, 50000],
              fill: false,
              borderColor: "rgb(77, 112, 255)",
              tension: 0.1,
            },
            {
              label: "Talabalar",
              data: [800, 1200, 500, 6000, 9000, 20000, 2100, 500, 23000, 15000, 18000, 40000],
              fill: false,
              borderColor: "rgb(255, 146, 174)",
              tension: 0.1,
            },
          ],
        }}
        height={ 80 }
        
        options={{
          // maintainAspectRatio: false,
          scale: {
            ticks: { beginAtZero: true },
          },
        }}
      />
    </div>
  );
};

export default Chart;
