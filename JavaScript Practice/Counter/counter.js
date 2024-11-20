// counter of elements in array and return object

const counter = (input) => {
    console.log(input);
      let output = {}
      for (item of input) {
        /* if (output[item]) {
          output[item]++
        } else {
          output[item] = 1
        } */
        output[item] = (output[item] || 0) + 1;
      }
      console.log(output);
      return output;
    }
    
    counter([1, 2, 3, 3, 3, 2, 1, 0]) // output -> {0:1,1:2,2:2,3:3}
    