import React from 'react';
import { addStrike } from '../utils';

function Dashboard({ balls, strikes, setBalls, setStrikes }) {
  return (
    <section className="dashboard">
      <button onClick={() => setStrikes(addStrike(strikes))}>
        Strike
      </button>

      <button>
        Ball
      </button>

      <button>
        Foul
      </button>

      <button>
        Hit
      </button>
    </section>
  );
}

export default Dashboard;