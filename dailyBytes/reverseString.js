

// CHALLENGE PROBLEM: reverse a string
let str1 = "happy";
let str3 = "Dog"
let str4 = "MonKeY"

const reverseString = (str) => {
    let str2 = '';

    for(i=str.length - 1; i>=0; i--){
        str2 = str2 + str[i]
    }
    return str2
}


console.log(reverseString(str1));



// NOTES
// common string methods

// .split : turns a string into an array, split based on what's in () - "" separates every character
// DOES NOT CHANGE ORIGINAL STRING
// let strArr = str1.split("")
// console.log(strArr);


// indexOf() : tells the index of the first occurance of whatever is in () - if it isn't in the string it returns -1 
// console.log(str1.indexOf("z"));


// .join()
// creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
// let joinedStr = strArr.join("");
// console.log(joinedStr)


// .charAt() && str[index] : accessing individual characters 
// console.log(str1.charAt(4));
// console.log(str1[4])

// .toUpperCase && .toLowerCase


// you can compare different letters with > && < 
// let1 = "a";
// let2 = "z";

// function isEqual(let1, let2){
//     if (let1 > let2){
//         console.log(let1, " is greater than ", let2)
//     }
//     else if (let2 > let1){
//         console.log(let2, " is greater than ", let1)
//     }
// }
// isEqual(let1, let2);




// LEETCODE STRING PROBLEM

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.


// let s = "boUAoUUk"
// console.log(s)

// let a = s.slice(0, s.length/2).toLowerCase();
// let b = s.slice(s.length/2, s.length).toLowerCase();
// console.log(a, b)
// let aObj = {
//     a: 0, 
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0
// }
// let bObj = {
//     a: 0, 
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0
// }

// let aVowelCount = 0;
// let bVowelCount = 0;

// const isMatch = (a, b) => {

//     for (i=0; i< a.length; i++){
//         if (a[i] in aObj){
//             aObj[a[i]] += 1;
//         }
//         if(b[i] in bObj){
//             bObj[b[i]] += 1;
//         }
//     }
    
//     // console.log(aObj);
//     // console.log(bObj);
    
//     for (key in aObj){
//         aVowelCount += aObj[key]
//     }
//     for (key in bObj){
//         bVowelCount += bObj[key]
//     }
//     // console.log(aVowelCount);
//     // console.log(bVowelCount);

//     if(aVowelCount == bVowelCount){
//         return true;
//     }
//     else{
//         return false;
//     }
    

// }


// console.log(isMatch(a, b));