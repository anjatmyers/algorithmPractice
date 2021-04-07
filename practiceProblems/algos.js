// Jordan and Micah algo questions

// Given an array nums. We define a running sum of an 
// array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Example 1

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// const runningSum = (array) =>{

//     let sum = 0;
//     let sumArray = [];

//     for (let i=0 ; i < array.length; i++){
//         sum += array[i];
//         sumArray.push(sum)
//     }
//     return sumArray 
// }

// let arr1 = [1, 2, 3, 4, 5];

// console.log(arr1, runningSum(arr1));



// Write a function findLongestSubString that accepts a string and returns
// the length of longest sub string with unique characters
// findLongestSubString('thisishowwedoit')); //6 (wedoit)
// findLongestSubString('supercalifragilisticexpialidocious')); //10 (supercalif)


// let str1 = 'happy'

// const substring = (str) => {

//     let cache = [];
    

// for (let i=0; i < str.length; i++){
//     let cache2 = [];
    
//     if (cache.includes(str[i])){

//         cache2.push(cache.join(''))
//         return cache2
//     }
//     else{
//         cache.push(str[i]);
//     }
    
// }

// }

// console.log(substring(str1));

// hash table??
// set - works the same as an array but only allows unique values

// sliding window algorythim, using two different pointers

const findLongestSubString = (str) => {

    let set = new Set();

    let left = 0;
    let right = 0;

    let maxLength = 0;

    while(right < str.length){

        if(!set.has(str[right]))
        {
            set.add(str[right]);
            maxLength = Math.max(maxLength, set.size);
            right++;
        }
        else{
            set.delete(str[left]);
            left++;
        }
    }

    // set is almost the same as an array but slightly differnet methods
    // let array = []; let array = new Array(); this is whats happending behind the scene 

    return maxLength;
}

findLongestSubString('supercalifragilisticexpialidocious');

// n^2 time complexity 
// use an object and check for a key - cache an object 
