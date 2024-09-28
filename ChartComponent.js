import React, { useEffect, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import 'chartjs-chart-financial'; // Import this to use financial charts
import 'chartjs-adapter-date-fns'; // Import date adapter

// Import and register the candlestick controller
import { CandlestickController } from 'chartjs-chart-financial'; 
ChartJS.register(Title, Tooltip, Legend, TimeScale, LinearScale, CategoryScale, CandlestickController);

const ChartComponent = ({ data }) => {
  const chartRef = useRef();

  // Format data for the candlestick chart
  const formattedData = {
    labels: data.map(item => item.time),
    datasets: [
      {
        label: 'Price',
        data: data.map(item => ({
          x: item.time,
          o: item.open,
          h: item.high,
          l: item.low,
          c: item.close,
        })),
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        type: 'time',
        title: { display: true, text: 'Time' },
      },
      y: {
        title: { display: true, text: 'Price' },
      },
    },
  };

  // Clean up the chart instance on unmount
  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy chart instance on unmount
      }
    };
  }, []);

  return (
    <Chart
      ref={chartRef}
      type="candlestick"
      data={formattedData}
      options={options}
    />
  );
};

export default ChartComponent;
