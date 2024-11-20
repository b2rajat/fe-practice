// is Power of 2

const isPowerOfTwo = (input) => {
    console.log(input)
    if (input === 2 || input === 1) {
      console.log("true")
      return true
    }
    if (input < 1) {
      console.log("false")
      return false
    }
    if (input % 2 != 0) {
      console.log("false")
      return false
    }
    return isPowerOfTwo(input / 2)
  }
  
  isPowerOfTwo(4) // true
  isPowerOfTwo(9) // false
  isPowerOfTwo(1) // true
  isPowerOfTwo(0) // false
  isPowerOfTwo(256) // true
  isPowerOfTwo(1000) // false
  