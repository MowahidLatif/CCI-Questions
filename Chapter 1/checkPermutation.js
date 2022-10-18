function checkPermutation(arr1, arr2) {
   
  let freq = {}
  
  if (arr1.length !== arr2.length) {
      return false;
  }
  for (let i = 0; i < arr1.length; i++) {
     let firstChar = arr1[i];
     if (!(firstChar in freq)) {
         freq[firstChar] = 0;
     }
     freq[firstChar]++;
  }
    for (let j = 0; j < arr2.length; j++) {
     let firstChar = arr2[j];
     if ((firstChar in freq)) {
         freq[firstChar]--;
     }
     if (freq[firstChar] === 0) {
       delete freq[firstChar];
     }
  }
  if (Object.keys(freq).length == 0) {
      return true;
  } else {
      return false;
  }
  
}

console.log("checkPermutation test 1 = ", checkPermutation('racecar', 'racecar'));
console.log("checkPermutation test 2 = ", checkPermutation('abcdefg', 'hijklmn'));
console.log("checkPermutation test 3 = ", checkPermutation('banana', 'annanab'));