// sort array 

const sortAscending = (inputArray) => {
	
	const ouputArray = inputArray.sort((a,b) =>a-b);
  return ouputArray
}

const inputArray = [2, 6, 10, 5]
const sortedArray = sortAscending(inputArray)

console.log(sortedArray)
