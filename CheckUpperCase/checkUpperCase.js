// is Uppercase or LowerCase

const isUpperCase = (input) => {
    const output = input === input.toUpperCase()
    console.log(output, "- isUpperCase")
    return output
  }
  
  const isLowerCase = (input) => {
    const output = input === input.toLowerCase()
    console.log(output, "- isLowerCase")
    return output
  }
  
  isUpperCase("a")
  isLowerCase("a")
  