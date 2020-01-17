export const calcBalls = (result, currentBalls, currentStrikes) => {
  if (result === 'ball' && currentBalls === 3) return 0; 
  else if (result === 'ball') {
    return currentBalls + 1;
  }
    
  if (result === 'strike' & currentStrikes === 2) return 0;
  else if (result === 'strike') {
    return currentBalls;
  }
}

export const calcStrikes = (result, currentBalls, currentStrikes) => {
  if (result === 'strike' && currentStrikes === 2) return 0;

  if (result === 'strike') return currentStrikes + 1;

  if (result === 'ball' & currentBalls === 3) return 0;

  if (result === 'ball') return currentStrikes;
}

export const strikesAfterFoul = (currentStrikes) => {
  if (currentStrikes === 2) return currentStrikes;
  else return currentStrikes + 1;
}