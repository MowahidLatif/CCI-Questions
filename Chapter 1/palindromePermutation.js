function palindromePermutation(arr) {
  console.log("-----------------------------------------------------");

  let freq = {}
  for (i = 0; i < arr.length; i++) {
      let charCheck = arr[i];
      if (!(charCheck in freq)) {
          freq[charCheck] = 0;
      }
      freq[charCheck]++;
  }
  console.log("freq = ", Object.keys(freq).length)
  console.log("freq = ", freq)
  
  let even = 0;
  let odd = 0;
  for (j = 0; j < Object.keys(freq).length; j++) {
      if (Object.values(freq)[j] % 2 !== 0) {
          console.log("Object.values(freq)[j] = ", Object.values(freq)[j])
          odd++
      } 
  }
  console.log("odd = ", odd)
  if (odd % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

console.log("palindromePermutation test 1 = ", palindromePermutation("RACE CAR"));
console.log("palindromePermutation test 3 = ", palindromePermutation("Tact Coa"));
