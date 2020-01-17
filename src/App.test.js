import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { calcBalls, calcStrikes } from './utils';

test('App renders without crashing', () => {
  render(<App />);
});

// unit testing elements
test('both displays are rendered', () => {
  const { getByText } = render(<App />);

  getByText(/balls/i);
  getByText(/strikes/i);
});

test('all buttons are rendered', () => {
  const { getByTestId } = render(<App />);

  getByTestId(/ball-button/i);
  getByTestId(/strike-button/i);
  getByTestId(/foul-button/i);
  getByTestId(/hit-button/i);
});

// unit testing isolated functions

test('balls increment when balls < 4, strikes < 3, and a ball is thrown', () => {
  expect(calcBalls('ball', 0, 2)).toBe(1);
});

test('strikes reset to 0 when a ball is thrown at 3 balls', () => {
  expect(calcStrikes('ball', 3, 1)).toBe(0);
});