
// let k = 10;
let k = 22;
// let k = 4;
// let k = 60;

let arr1 = [1, 3, 8, 2];
let arr2 = [3, 8, 13, 7, 11];
let arr3 = [4, 2, 6, 5, 2];
let arr4 = [10, 20, 30, 60, 70, 80, 5]

const twoSum = (arr) => {

    for(i =0; i < arr.length; i++){
        
        for(j = 1; j < arr.length; j++){
            
            if(i != j && (arr[i] + arr[j]) == k){
               console.log("ans", arr[i], '+', arr[j], '=', (arr[i] + arr[j]));
                return true
            }
        }

    }

    return false;


}


console.log(twoSum(arr2));