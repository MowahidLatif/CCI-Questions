function isUnique(arr) {
   
  let freq = {}
  for (let i = 0; i < arr.length; i++) {
      let rightChar = arr[i];
      if (!(rightChar in freq)) {
          freq[rightChar] = 0;
      } else {
          return false;
      }
  }
  return true;
}

console.log("Welcome to Programiz!", isUnique('apples'));
console.log("Welcome to Programiz!", isUnique('abcdefg'));
console.log("Welcome to Programiz!", isUnique('banana'));