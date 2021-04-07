
// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


// let A = [1, 3, 6, 4, 1, 2]

// function solution(A) {
//     // only positive values, sorted
//     A = A.filter(x => x >= 1).sort((a, b) => a - b)
//     let x = 1
//     for(let i = 0; i < A.length; i++) {
//         // if we find a smaller number no need to continue, cause the array is sorted
//         if(x < A[i]) {
//             return x
//         }
//         x = A[i] + 1
//     }
//     return x
// }\



// solution with recursion
// (recursion is always at least 2 0f N, this was 2of N)
// let arr = [0, 2, 3, 4, 5]
// let nr = 1;
// const missing = (arr, nr) => {
//     if (!(arr.includes(nr))) {
//         return nr
//     } else {
//         return missing(arr, nr + 1)
//     }
// }
// console.log(missing(arr, nr));



// num
// 1-100
// mult of 3 print fizzz
// mult of 5 buzz 
// mulit 3 and 5 print fizzbuzz


// fizzbuzz

// my solution
// function fizbuzz(){
    
//     for (i = 1; i <= 100; i ++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizbuzz')
//         }
//         else if (i % 3 === 0){
//             console.log('fizz')
//         }
//         else if (i % 5 === 0){
//             console.log('buzz')
//         }
//         else{
//             console.log(i)
//         }
//     }
// }
// fizbuzz();


// claude's
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }


// Layne's
// for (let i = 1; i < 100; i++) {
//     let output = "";
//     switch (true) {
//       case (i % 3 === 0 && i % 5 === 0):
//         output += "FizzBuzz";
//         break;
//       case (i % 3 === 0):
//         output += "Fizz";
//         break;
//       case (i % 5 === 0):
//         output += "Buzz";
//         break;
//       default:
//         output = i;
//     }
//     console.log(output);
//   }

// adam's
// for (var x=1; x <= 100; x++) {
//     var a = x % 3 == 0, b = x % 5 == 0;
//     console.log(a ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : x);
// }



// let arr = [1, 2, 5, 3, 4, 6, 7, 8, 9]

// function bribe(arr){

//     for(let i = 1; i < arr.length; i++){
        
//     }
    
// }

// bribe(arr);
// sort the array, 




// anagram letter 




// const returnLetters = () => {
    
//     let e = ['a', 'p', 'p', 'l', 'e']
//     let f = ['p', 'e', 'a', 'r']
//     // let e = ['l', 'e', 'm', 'o', 'n']
//     // let f = ['m', 'e', 'l', 'o', 'n']
//     // let e = ['r', 'a', 't', 'h', 'e', 'r']
//     // let f = ['h', 'a', 'r', 'd', 'e', 'r']
//     let a = e.sort()
//     let b = f.sort()
//     let c = []
//     let d = []
//     let g = []
//     let count = 0;
//     let count2 = 0;
    

//     a.map((letter) => {
        
//         b.map((letter2) => {
            
//             if (letter == letter2){

//                 c.push(letter2)
                
//             }
            
//         })
        
//         if(!c.includes(letter)){
//             d.push(letter)
//             console.log('count1', d.length)
//             console.log('d', d)
//         }
        
//     })
//     console.log('c',c)
    

//     b.map((letter3) => {
        
//         if(!c.includes(letter3)){
//             d.push(letter3)
//             console.log('d',d)
           
//         }
//     })
//   console.log('count2', d.length)
// //   let count3 = (c.length + d.length) - b.length 
// //   console.log('count3', count3)

// //   console.log('missing letters', count + d.length + count3)  
// }


// returnLetters();

const solution = (a,b) => {
    let arrA = a.split("");
    let arrB = b.split("");
    let objectA = {};
    let objectB = {};
    let total = 0;
    for (let i = 0 ; i < arrA.length ; i++){
        if (arrA[i] in objectA){
            objectA[arrA[i]] += 1
        } else{
            objectA[arrA[i]] = 1
        }
    }
    for (let i = 0 ; i < arrB.length ; i++){
        if (arrB[i] in objectB){
            objectB[arrB[i]] += 1
        } else{
            objectB[arrB[i]] = 1
        }
    }
    for (let key in objectA){
        if (!(key in objectB)){
            total += objectA[key]
        } else if (objectA[key] != objectB[key]){
            let difference = Math.abs(objectA[key] - objectB[key]);
            console.log('difference', difference)
            total += difference
        }
    }
    for (let key in objectB){
        if (!(key in objectA)){
            total += objectB[key]
        }
    }
    console.log(objectA)
    console.log(objectB)
    return total
}
// console.log(solution("capers","casper"));
// console.log(solution("rather","harder"));
// console.log(solution("apple","pear"));
// console.log(solution("apppppple","pear"));
// console.log(solution("apple","pppppear"));
console.log(solution("aaabbbbcccdddeee","fffggghhiiijjj"));
// ^ 30