
// let k = 10;
// let k = 22;
// let k = 4;
// let k = 60;

let arr1 = [1, 3, 8, 2];
let arr2 = [3, 9, 13, 7, 11];
let arr3 = [4, 2, 6, 5, 2];
let arr4 = [10, 20, 30, 60, 70, 80, 5, 50]

// second solution with hashmap


const twoSum = (arr, total) => {
    let hash = {};
   
    for(i=0; i<arr.length; i++){
        const currentNum = arr[i];

        if(hash[total - currentNum] !== undefined){
            console.log(`index: ${hash[total - currentNum]} & ${i} is ${arr[hash[total - currentNum]]} + ${arr[i]} and equals ${total}`)
            return [hash[total - currentNum], i];
        }
        hash[currentNum] = i;
        console.log(hash)
    }

    return [];

}
console.log(twoSum(arr4, 60));



// Original Solution (no hashmap)
// const twoSum = (arr) => {

//     for(i =0; i < arr.length; i++){
        
//         for(j = 1; j < arr.length; j++){
            
//             if(i != j && (arr[i] + arr[j]) == k){
//                console.log("ans", arr[i], '+', arr[j], '=', (arr[i] + arr[j]));
//                 return true
//             }
//         }

//     }

//     return false;


// }
// console.log(twoSum(arr2));