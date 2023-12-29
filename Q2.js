            //[0,1,2,  3,4,5,6,7,8,9]
const numbers=[2,7,11,15,3,4,5,4,3,1];
function sumOfGivenNumber(arr,target) {
    let sum=0;
    for(let i =0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j] == target){
                console.log(`[${i},${j}]`);
            }
        }
    }    
}
sumOfGivenNumber(numbers,7)

//solution2
function sumOfGivenNumber(array, target) {
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numMap.has(complement)) {
      console.log(`[${numMap.get(complement)},${i}]`);
      return;
    }

    numMap.set(numbers[i], i);
  }

  console.log("No pair found");
}

sumOfGivenNumber(numbers, 7);

//Solution 3 
also, we can get all of the pairs but make it lope over all the numbers and save them in a list and thin print every two elements in a new line 
