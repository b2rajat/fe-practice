// find max number

const findMax = (input) => {
    var max = input[0]
    for (var i = 1; i < input.length; i++) {
      if (input[i] > max) {
        max = input[i]
      }
    }
    return max;
  }
  
console.log(findMax([2, 3, -5, 10, 9])) // 10
  
  