// Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// *****LEARNED: for(x in obj) is checking for obj keys arr.includes checks if an array has a certain value
// IN = OBJ .includes = Arr

// let str = "USA" //return true
// let str = "Calvin" //return true
let str = "compUter" // return false
// let str = "coding" //return true

const isCapitalizationCorrect = (str) => {
    let capArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    if(capArr.includes(str[0])){
        // if first letter is Capt check second
        if(capArr.includes(str[1])){
            // if second is capt, all should be captialized
            for(i=2; i<str.length; i++){
                if(!capArr.includes(str[i])){
                    return false;
                }
            }
        }
        else{
            // if second not capt, rest should be lowercase
            for(i=2; i<str.length; i++){
                if(capArr.includes(str[i])){
                    return false;
                }
            }
        }
        
    }
    else {
        // if first is not capt, all should be lowercase
        for(i=1; i<str.length; i++){
            if(capArr.includes(str[i])){
                return false;
            }
        }
        
        
    }
    return true;
}

console.log(isCapitalizationCorrect(str));
