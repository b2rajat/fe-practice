// Remove Duplicates

const removeDuplicates = (input) => {
    let output = []
    for (item in input) {
      if (!output.includes(input[item])) {
        output.push(input[item])
      }
    }
    return output
  }
  
  
  
  console.log(removeDuplicates([1, 2, 3, 1, 2, 3])) // [1,2,3]
  console.log(removeDuplicates([])) // []
  