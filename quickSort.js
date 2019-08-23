/**
 * QUICK SORT
 * 
 * One array
 * Recursion - base case
 * For of
 * Pivot
 * 
 */

function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  var pivot = arr[Math.floor(arr.length / 2)];
  var left = [];
  var right = [];
  var equal = [];

  for(let val of arr) {
    if(val < pivot) {
     left.push(val);
  } else if(val > pivot) {
    right.push(val);
  } else {
    equal.push(val)
  }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)]

}

const list = [1, 0, 9, 3, 5, 2];
console.log(quickSort(list))
