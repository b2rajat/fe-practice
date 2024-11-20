// truncate string

const truncate = (str, maxLength) => {
    console.log(str, maxLength)
    if (str.length < maxLength) {
      console.log(str)
      return str
    }
    const output = str.slice(0,maxLength) + '...';
    console.log(output);
    return output;
  }
  
  truncate('Hello I am Rajat Jain', 6); // Hello ...
  truncate('Hello World', 15); // Hello World
  
  