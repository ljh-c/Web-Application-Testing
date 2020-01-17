import React from 'react';
import { addStrike } from '../utils';

function Dashboard({ balls, strikes, setBalls, setStrikes, handleScore }) {
  return (
    <section className="dashboard">
      <button onClick={() => handleScore('ball')}
      data-testid="ball-button">
        Ball
      </button>

      <button onClick={() => handleScore('strike')}
      data-testid="strike-button">
        Strike
      </button>

      <button onClick={() => handleScore('foul')}
      data-testid="foul-button">
        Foul
      </button>

      <button onClick={() => handleScore('hit')}
      data-testid="hit-button">
        Hit
      </button>
    </section>
  );
}

export default Dashboard;