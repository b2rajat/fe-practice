// Mode : return number occuring most;

const findMode = (input) => {
    console.log(input)
    let counter = {}
    let maxNumber = input[0]
    let maxCount = 1
    for (item of input) {
      counter[item] = (counter[item] || 0) + 1
      if (counter[item] > maxCount) {
        maxCount = counter[item]
        maxNumber = item
      }
    }
    console.log(maxNumber)
    return maxNumber
  }
  
  findMode([1, 2, 3, 3, 3, 2, 1, 0]) // 3
  
  findMode([1, 2, 3, 3, 3, 2, 1, 0, 0, 0, 0]) // 3
  