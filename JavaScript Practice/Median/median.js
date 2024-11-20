// Median
// 1. sort 2.if length is odd then middle element 3.if length is even then avg of middle elementss

const findMedian = (input) => {
    console.log(input)
    const sortArray = input.sort((a, b) => a - b)
    const sortArrayLength = sortArray.length
    let output
    if (sortArrayLength % 2 === 0) {
      output =
        (sortArray[sortArrayLength / 2] + sortArray[sortArrayLength / 2 - 1]) / 2
    } else {
      output = sortArray[sortArrayLength / 2 - 0.5]
    }
    console.log(output)
    return output
  }
  
  findMedian([1, 2, 3, 3, 2, 1]) // output will be -> 2 
  findMedian([1, 2, 3, 3, 2]) // output will be -> 2
  
  findMedian([2,5,3,1,4,6,7,8])
  