// sum of digits

const sumOfDigits = (input) => {
    if (input === 0) {
      return 0
    }
    return (input % 10) + Math.floor(sumOfDigits(input / 10))
  }
  
  console.log(sumOfDigits(123)) // 6
  console.log(sumOfDigits(0)) // 0
  console.log(sumOfDigits(103)) // 4
  console.log(sumOfDigits(999)) // 27
  
  // or convert to array
  
  
  