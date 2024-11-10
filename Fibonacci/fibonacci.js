// Fibonacci 0,1,1,2,3,5,8,13.... sum of prev two numbers

const findFibonacci = (input) => {
    /* console.log(input); */
      if (input === 1)  return 0;
      if (input === 2) return 1;
      return (findFibonacci(input-1) + findFibonacci(input-2));
    }
    
    console.log(findFibonacci(1)); // 0
    console.log(findFibonacci(2)); // 1
    console.log(findFibonacci(3)); // 1
    console.log(findFibonacci(5)); // 3