function urlIFY(arr1) {
    
  let res = [];
  let spaceCount = 0;
  let replaceWord = "%20";
  for(i = 0; i < arr1.length; i++) {
      if (arr1[i] === ' ') {
          spaceCount++;
      }
  }
  
  console.log("spaceCount = ", spaceCount);
  let trueLength = arr1.length;
  console.log("trueLength = ", trueLength);
  
  for (j = 0; j < arr1.length; j++) {
      if (arr1[j] == ' ') {
          res += replaceWord
      } else {
          res += arr1[j]
      }
  }
  return res;
}

console.log("urlIFY test 1 = ", urlIFY("THIS     IS A   TEST SENTENCE   "));
console.log("urlIFY test 2 = ", urlIFY("RemoveAllPerious"));
console.log("urlIFY test 3 = ", urlIFY("testing   THIS    TEST  "));

// NEEDS DEBUGGING