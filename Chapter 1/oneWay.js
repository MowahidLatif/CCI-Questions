function oneWay(arr1, arr2) {
    
  if (arr1.length === arr2.length) {
      return sameLength(arr1, arr2);
  } else if (arr1.length + 1 === arr2.length) {
      return diffLength(arr1, arr2);
  } else if (arr1.length - 1 === arr2.length) {
      return diffLength(arr2, arr1)
  }
  
  function sameLength(arr1, arr2) {
      let diff = false;
      for (i = 0; i < arr1.length; i++) {
          if (arr1.charAt(i) != arr2.charAt(i)) {
              if (diff) {
                  return false;
              }
              diff = true;
          }
      }
      return true;
  }
  
  function diffLength(arr1, arr2) {
      let index1 = 0;
      let index2 = 0; 
      while (index1 < arr1.length && index2 < arr2.length) {
          if (arr1.charAt(index1) != arr2.charAt(index2)) {
              if (index1 < index2) {
                  return false;
              }
              index2++
          } else {
              index1++;
              index2++;
          }
      }
      return true;
  }
}

console.log("oneWay test 1 = ", oneWay("pale", "ple"));
console.log("oneWay test 2 = ", oneWay("Tact", "Pack"));
