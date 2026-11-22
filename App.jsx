
import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Bring Nature Into Your Home</p>
          <button
            className="get-started"
            onClick={() => setStarted(true)}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
