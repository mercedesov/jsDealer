// Write a function that generates Pascal's triangle up to a given number of rows.

function PascalTriangle(n) {
  const triangle = [];

  for (let i = 0; i < n; i++) {
    const row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
}

const result = PascalTriangle(5);
result.forEach(row => console.log(row));

console.log();
// Find all pairs that sum to a given value.

function findUniquePairs(arr, targetSum) {
  const pairs = [];
  const seen = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        const pair = [arr[i], arr[j]].sort((a, b) => a - b);
        if (!pairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
          pairs.push(pair);
        }
      }
    }
  }

  return pairs;
}

const arr = [1, 2, 3, 2, 4, 5];
const targetSum = 6;
console.log(findUniquePairs(arr, targetSum));
