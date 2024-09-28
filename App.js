import React, { useEffect, useState } from 'react';
import ChartComponent from './component/ChartComponent';
// import ChartComponent from './ChartComponent';

const App = () => {
  const [data, setData] = useState([]);

  // Example fetching data (you can replace this with your actual data fetching)
  useEffect(() => {
    // Mock data for demonstration
    const mockData = [
      { time: '2024-01-01', open: 100, high: 110, low: 90, close: 105 },
      { time: '2024-01-02', open: 105, high: 115, low: 95, close: 110 },
      { time: '2024-01-03', open: 110, high: 120, low: 100, close: 115 },
      // Add more data points as needed
    ];
    setData(mockData);
  }, []);

  return (
    <div>
      <h1>Candlestick Chart Example</h1>
      <ChartComponent data={data} />
    </div>
  );
};

export default App;
