// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function aVeryBigSum(ar) {
  // Write your code here
  const total = ar.reduce((prevValue, current) => {
    return prevValue + current;
  }, 0);

  return total;
}