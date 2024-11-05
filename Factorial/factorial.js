// Factorial

const factorial = (input) => {
	if(input === 0 || input === 1) {
  	return 1;
  }
  return input*factorial(input-1);
}

console.log(factorial(0),'Factorial of 0');
console.log(factorial(1),'Factorial of 1');
console.log(factorial(2),'Factorial of 2');
console.log(factorial(3),'Factorial of 3');
console.log(factorial(4),'Factorial of 4');