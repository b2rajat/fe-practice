// min of array

const minOfArray = (input) => {
    let minimum = input[0]
    for (item of input) {
      if (item < minimum) {
        minimum = item
      }
    }
    console.log(minimum);
    return minimum
  }
  
  minOfArray([1, 2, 3]) // 1
  minOfArray([-1, 2, 3]) // -1
  minOfArray([-1, -2, -3]) // -3
  