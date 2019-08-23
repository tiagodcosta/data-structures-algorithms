/**
 * BINARY SEARCH
 * divide and conquer
 * 0(log n)
 */

function binarySearch(arr, target) {
  var start = arr[0];
  var end = arr.length - 1;
 

  while(start < end) {
    var middle = Math.floor((start + end) / 2);

    if(arr[middle] < target) {
      start = middle + 1;
    } else if(arr[middle] > target) {
      end = middle - 1;
    } else if(arr[middle] === target) {
      return middle;
    }
  }
  return 'not found';
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6));