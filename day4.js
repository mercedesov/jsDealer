/*Write a function that checks if the elements of an array are sorted in ascending order,
and returns true if they are, otherwise returns false.*/

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1,2,3,4,5]));
console.log(isSorted([1,5,3,4]));


console.log();
/*Write a function that takes an array and returns an array where the first and last
elements are swapped.*/

function swap(arr) {
  if (arr.length > 1) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}

console.log(swap([1,2,3,4,5]));

