// https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function compareTriplets(a, b) {
  const arrPoints = [0, 0];
  const objCompare = {
    pointAlice: (x, y) => x > y,
    pointBob: (x, y) => x < y,
  };

  for (let i = 0; i < a.length; i++) {
    if (objCompare.pointAlice(a[i], b[i]))
      arrPoints[0] += 1;
    if (objCompare.pointBob(a[i], b[i]))
      arrPoints[1] += 1;
  }

  return arrPoints;
}