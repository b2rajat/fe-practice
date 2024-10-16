function longestWord(input) {
    var inputArray = input.split(" ")
    var maxLength = 0
    var maxWordIndex = 0
    for (var i = 0; i < inputArray.length; i++) {
      var currentWordLength = inputArray[i].length
      if (currentWordLength > maxLength) {
        maxWordIndex = i
        maxLength = currentWordLength
      }
    }
    return inputArray[maxWordIndex]
  }
  
  var input = "Hi I am Rajat Jain"
  console.log(longestWord(input))