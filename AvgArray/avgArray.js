// Average of array

const avgOfArray = (input) => {
    const total = input.reduce((a, b) => a + b)
    console.log(total/input.length)
  }
  
  const input = [1,2,3];
  avgOfArray(input);
  