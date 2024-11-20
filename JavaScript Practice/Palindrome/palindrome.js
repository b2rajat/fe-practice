// palindrome ignore cases

const isPalindrome = (input) => {
    const inputLowerCase = input.toLowerCase()
    for (var i = 0 ; i < inputLowerCase.length / 2; i++) {
      if (
        inputLowerCase.charAt(i) !=
        inputLowerCase.charAt(inputLowerCase.length - i - 1)
      ) {
        return false
      }
    }
    return true
  }
  
  console.log(isPalindrome("raceCar")) // true
  console.log(isPalindrome("raceCars")) // false
  