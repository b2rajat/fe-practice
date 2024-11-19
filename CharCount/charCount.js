// input : 'MissIssippi', 'I', output 4  

/* function charCount(input, character) {
    console.log(input);
    console.log(character);
  const lowerCharacter = character.toLowerCase();
  const lowerInput = input.toLowerCase();
  var counter = 0;
  for (var i=0;i<lowerInput.length; i++){
    if(lowerInput.charAt(i) === lowerCharacter){
      counter++;
    }
  }
  return counter;

}
 */
const charCountFromReduce = (input,character) => {
    console.log(input);
 console.log(character);
   const lowerCharacter = character.toLowerCase();
 const lowerInput = input.toLowerCase();
 const lowerInputArray = lowerInput.split('');
/*   console.log(lowerInputArray); */
 const totalCount = lowerInputArray.reduce((count,item) => {
/*   console.log(item); */
     if(item === lowerCharacter){
       count++;
   }
   return count;
 },0);
 
 return totalCount
};

/* console.log(charCount('MissIssippi', 'I')); */


console.log(charCountFromReduce('MissIssippi', 'I')); 
console.log(charCountFromReduce('MissIssippi', 'p')); 