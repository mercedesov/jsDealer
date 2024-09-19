/* Given an array Required to find the first element of the
array Solve the problem using a function.*/

function getFirstElement(arr) {
  if (arr.length === 0) {
    return null; 
  }
  return arr[0];
}

console.log(getFirstElement([1, 2, 3, 4, 5]));
console.log(getFirstElement([])); 


console.log();
/*To Write algoritms Insertion sort.*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([3, 2, 4, 1, 5, 6])); 
