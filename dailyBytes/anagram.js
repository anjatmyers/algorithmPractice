// Given two strings s and t return whether or not s is an anagram of t.
// Note: An anagram is a word formed by reordering the letters of another word.

// s = "cat", t = "tac", return true
// s = "listen", t = "silent", return true
// s = "program", t = "function", return false

// solution 1 sort strings and check if equal
// ..................
// const isAnagram = (str1, str2) => {
    
//     let str1Obj = {};
//     let str2Obj = {};

//     let str1Arr = str1.split('').sort().join("");
    
//     let str2Arr = str2.split('').sort().join("");
    
//     if(str1Arr == str2Arr){
//         return true;
//     }
//     else{
//         return false;
//     }

// }


// console.log(isAnagram('silent', 'listen'));
// ....................









// solution 2: create character maps and compare 
// ......................
const isAnagram = (str1, str2) => {
    
    let str1Obj = {};
    let str2Obj = {};

    let str1Arr = str1.split('');
    
    let str2Arr = str2.split('');

    if(str1Arr.length != str2Arr.length){
        return false;
    }
    // creating str1Obj
    for(x in str1Arr){
        
        if(str1Arr[x] in str1Obj){
            str1Obj[str1Arr[x]] += 1
        }
        else{
            str1Obj[str1Arr[x]] = 1
        }
    }
    // creating str2Obj
    for(x in str2Arr){
        
        if(str2Arr[x] in str2Obj){
            str2Obj[str2Arr[x]] += 1
        }
        else{
            str2Obj[str2Arr[x]] = 1
        }
    }
    
    
    for(key in str1Obj){
        if(str1Obj[key] !== str2Obj[key]){
            return false;
        }
        
    }

   return true; 
    

}


console.log(isAnagram('apple', 'palep'));
