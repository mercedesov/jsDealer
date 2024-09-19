//Write a JavaScript function to get difference between two dates in days (2024/01/10, 2024/08/01).

function dateDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));
  return diffDays;
}

console.log(dateDifference('2024/01/10', '2024/08/01')); 


console.log();
// Write a function, that takes an array and returns a new array without duplicates.

function removeDuplicates(arr) {
  const seen = {};
  const result = [];
  for (const item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5]));
