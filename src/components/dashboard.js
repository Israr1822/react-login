import React, { useState } from 'react';

function Dashboard() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const brandOptions = ['Sony', 'Samsung', 'Apple', 'Xiaomi'];
  // Replace these with your actual list of brand names

  const modelOptions = {
    Sony: ['Model A', 'Model B', 'Model C'],
    Samsung: ['Model X', 'Model Y', 'Model Z'],
    Apple: ['Model 1', 'Model 2'],
    Xiaomi: ['Model Redmi', 'Model Mi'],
  };
  // Define models for each brand

  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    setSelectedBrand(selectedBrand);
    setSelectedModel('');
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '200px', background: '#f2f2f2', padding: '10px' }}>
        <h3>Navbar</h3>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </nav>
      <div style={{ marginLeft: '20px' }}>
        <h1>Dashboard</h1>
        <div>
          <h2>Brand:</h2>
          <select value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Select Brand</option>
            {brandOptions.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2>Model:</h2>
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select Model</option>
            {modelOptions[selectedBrand] &&
              modelOptions[selectedBrand].map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;