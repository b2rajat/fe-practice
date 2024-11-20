//repease String

const repeateString = (str, input) => {
	if (input === 1) return str;
  return str+repeateString(str,input-1);
}

console.log(repeateString('abc',1)); // abc
console.log(repeateString('two',2)); // twotwo
console.log(repeateString('three',3)); // threethreethree
console.log(repeateString('five ',5)); // five five five five five 

// or use str.repeat(input);