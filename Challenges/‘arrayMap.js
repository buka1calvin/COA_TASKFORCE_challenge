const contigiousSubArraySum = (array, targetedSum) => {
    //i initialized the sum of the current window and a map to store previous sums
    let cumulativeSum=0
    const seenSums=new Map()
    //looped over the array
    for (let number of array){
        //made summation of the cumulative sum to each element within the array
        cumulativeSum+=number

        //here i checked if the the cumulated sum is equal to the targeted sum
        if(cumulativeSum===targetedSum){
            return true
        }

        //check if the thereis any subArray that sum up to the target
        if(seenSums.has(cumulativeSum-targetedSum)){
            return true
        }

        //store the cumulative/current sum to the map
        seenSums.set(cumulativeSum,true)
    }
};

const array = [4, 2, 7, 1, 9, 5];
const targetedSum = 17;
console.log(contigiousSubArraySum(array, targetedSum));
