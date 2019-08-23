function counting(arr) {
  const counts = {};
  arr.forEach(element => {
    if(counts.hasOwnProperty(element)) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }  
  });
  return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

console.log(counting([1, 1, 1, 2, 3, 3, 4, 5]))