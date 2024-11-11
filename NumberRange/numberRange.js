// number Range

const numberRange = (low, high) => {
    console.log(low, high)
    const output = []
    for (var i = low; i < high + 1; i++) {
      output.push(i)
    }
    console.log(output)
    return output
  }
  
  numberRange(0, 5) // [0,1,2,3,4,5];
  numberRange(-2, 3) // [-2,-1,0,1,2,3];
  