// camel case

const convertInCamelWord = (input) => {
    let output = ""
    /*   console.log(input.slice(0,1).toUpperCase()); */
    output = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
    return output
  }
  
  const toCamelCase = (input) => {
    const inputArray = input.split(" ")
    let output = ""
  
    for (itemIndex in inputArray) {
      if (itemIndex === "0") {
        output = inputArray[0].toLowerCase()
      } else {
        output = output + convertInCamelWord(inputArray[itemIndex])
      }
    }
    console.log(output)
    return output
  }
  
  toCamelCase("hello world rAJAt") // helloWorldRajat
  