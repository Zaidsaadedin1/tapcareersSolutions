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
