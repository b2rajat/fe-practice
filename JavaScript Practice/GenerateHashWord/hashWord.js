/* String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
} */

/* String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0,index) + replacement + this.substring(index+replacement.length);
} */

  function generateHashWord(input) {
    var inputArray = input.split(" ")
    var hashWord = "#"
    for (var i = 0; i < inputArray.length; i++) {
      var curWord = inputArray[i]
      curWord = curWord.replace(curWord[0], curWord[0].toUpperCase())
  
      /* inputArray[i]=inputArray[i].replaceAt(0,inputArray[i][0].toUpperCase()); */
      hashWord = hashWord + curWord;
    }

    // can also use inputArray.join('');
    return hashWord
  }
  
  var input = "hi i am rajat Jain"
  console.log(generateHashWord(input))
  
  // o/p -> '#HiIAmRajatJain'
  