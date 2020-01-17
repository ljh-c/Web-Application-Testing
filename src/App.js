import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { calcBalls, calcStrikes, strikesAfterFoul } from './utils';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleScore = (result) => {
    switch(result) {
      case 'ball':
        setBalls(calcBalls('ball', balls, strikes));
        setStrikes(calcStrikes('ball', balls, strikes));
        break;
      case 'strike':
        setBalls(calcBalls('strike', balls, strikes));
        setStrikes(calcStrikes('strike', balls, strikes));
        break;
      case 'foul':
        if (strikes === 2) return null;
        setStrikes(strikesAfterFoul(strikes));
        break;
      case 'hit':
        setStrikes(0);
        setBalls(0);
      default:
        console.log('error');
    }
  };

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} />
      <Dashboard balls={balls} strikes={strikes} setStrikes={setStrikes} handleScore={handleScore} />
    </div>
  );
}

export default App;