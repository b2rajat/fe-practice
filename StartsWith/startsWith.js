// check if the first string starts with the second string

const startsWith = (mainString, secondString) => {
    const output =
      mainString.slice(0, secondString.length).toLowerCase() ===
      secondString.toLowerCase()
    console.log(output)
    return output
  }
  
  startsWith("hello World", "Hello") // True
  
  startsWith("hello World", "world") // False