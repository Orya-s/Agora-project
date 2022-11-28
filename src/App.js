import React from 'react';
import { Inventory } from './features/inventory/Inventory';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="background"></div>
        <Inventory />
      </header>
    </div>
  );
}

export default App;