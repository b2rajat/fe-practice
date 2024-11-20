// arrays are equal

const isArraysAreEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
      return false
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false
      }
    }
    return true
  }
  
  console.log(isArraysAreEqual([], [])); // true
  console.log(isArraysAreEqual([1,2,3], [1,2,3]));// true
  
  console.log(isArraysAreEqual([1,2,4], [0,1]));// false
  console.log(isArraysAreEqual([1,2,4], [1,2,3]));// false