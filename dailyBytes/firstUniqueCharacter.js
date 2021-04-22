// Given a string, return the index of its first unique character. If a unique character does not exist, return -1.

// "abcabd", return 2
// "thedailybyte", return 1
// "developer", return 0
// "aabbccdd", return -1 

// ???????????why is Object returning Nan???
const firstUniqueChar = (str1) => {

    let str = str1.replace(/[^\w]/g, "").toLowerCase();
    let charObj = {};
    // console.log(strArr)

    for(i=0; i < str.length; i++){

        if(!(str[i] in charObj)){
            charObj[str[i]] = 1;
        }
        else if(str[i] in charObj){
            charObj[str[i]] += 1;
        }

    }

    console.log(charObj)
    for(key in charObj){
        if(charObj[key] == 1){
            return str.indexOf(key)
        }
    }


    // console.log(charObj)
    
}

console.log(firstUniqueChar("AaBCcDddffG"));



















// const firstUniqueCharacter = (str1) => {
    
//     let charMap = new Map();
//     let str = str1.replace(/[^\w]/g, "").toLowerCase();
//     console.log('strLowerCase', str)

//     for(i=0; i<str.length; i++){
        
//         if(!charMap.has(str[i])){
//             charMap.set(str[i], 1);
//         }
//         else{
//             charMap.set(str[i], charMap.get(str[i]) +1);
//         }
//     }

//     console.log(charMap);
//     for(let [key, value] of charMap){
//         if(value == 1){
//             // console.log(str.charAt(8))
//             return str.indexOf(key)
//         }
//     }
//     return -1;
// }

// console.log(firstUniqueCharacter('aabbccdde'));

