// CoinSelector.js
import React from 'react';

const CoinSelector = ({ coins, selectedCoin, setSelectedCoin, selectedInterval, setSelectedInterval }) => {
  return (
    <div>
      <select onChange={(e) => setSelectedCoin(e.target.value)} value={selectedCoin}>
        {coins.map(coin => (
          <option key={coin} value={coin}>{coin}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedInterval(e.target.value)} value={selectedInterval}>
        <option value="1m">1 Minute</option>
        <option value="3m">3 Minutes</option>
        <option value="5m">5 Minutes</option>
      </select>
    </div>
  );
};

export default CoinSelector;
