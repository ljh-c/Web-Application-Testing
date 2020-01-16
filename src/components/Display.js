import React from 'react';

function Display({ balls, strikes }) {
  return (
    <section className="display">
      <div className="row">

      <div className="balls">
        <h3 className="balls_title">Balls</h3>
        <div className="value">{balls}</div>
      </div>
      <div className="strikes">
        <h3 className="strikes_title">Strikes</h3>
        <div className="value">{strikes}</div>
      </div>

      </div>
    </section>
  );
}

export default Display;