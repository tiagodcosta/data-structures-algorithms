/**
 *  MERGE SORT
 * 
 * Two arrays (sorted already)
 * While
 * Out of space
 * 0(n log n)
 * 
 */

function mergeSort(arr1, arr2) {
  var merged = [];
  var index1 = 0;
  var index2 = 0;
  var current = 0;

  while(current < (arr1.length + arr2.length)) {
    var unMerged1 = arr1[index1];
    var unMerged2 = arr2[index2];

   if(unMerged1 < unMerged2 || arr2.length <= index2 && arr1.length >= index1) {
      merged[current] = unMerged1;
      index1++;
    } else {
      merged[current] = unMerged2;
      index2++;
    }
    current++;
  }
  return merged;
}

const list1 = [1, 2, 4];
const list2 = [5, 7, 14, 19];

console.log(mergeSort(list1, list2));