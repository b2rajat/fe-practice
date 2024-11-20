// count vowels

const countVowels = (input) => {
  const inputArray = input.split("")
  console.log(inputArray)
  const vowelList = ["a", "e", "i", "o", "u"]
  const count = inputArray.reduce((total, currentElemnt) => {
    if (vowelList.includes(currentElemnt.toLowerCase())) {
      return total + 1
    }
    return total
  }, 0)
  console.log(count)
  return count
}

countVowels("abcdeEDCBA") // 4
countVowels("123abcdeEDCBA123") // 4