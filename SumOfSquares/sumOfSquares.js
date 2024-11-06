// sum of squares

const sumOfSquares = (input) => {
	const total= input.reduce((total, currentElement) => {
  	return total+currentElement*currentElement;
  },0 );
  console.log(total);
  return total;
};

sumOfSquares([1,2,3]); // 1*1 + 2*2 + 3*3 = 14