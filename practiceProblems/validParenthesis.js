// common algo problem : use stacks to help solve 

// is there a closing parentheses for each bracket 


let str = '{}()[]' 
// true
let str2 = '{(})'
// false 
let str3 = '()[{}]{}'
// true
let str4 = '{[]}'

let str5 = '{[}]'

// make an array and push the open brace then pop off the closing braces to see if they match(opposite) the opening brace you pushed to the array 
// at the end, if your string length is zero then you have a valid str cause they all have matching pairs

// objects are great for performance, V likes these
function isValid(str){

    let opening = {
        '{': true,
        '(': true,
        '[': true,
    }

    let closing = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    const stack  = new Stack();

for (let i = 0; i<str.length; i++){
    let char = str[i];

    if(opening[char]){
        stack.push(char);
        // stack["("] index of 0 
    }

    if(char in closing){
        let result = stack.pop(char);
        // pop the opening bracket off stack to see if its equal to the closing

        if(result !== closing[char]){
            // if not equal then you don't have a valid string so it is false
            // is result equal to closing[')'] which should be :'('
            return false;
        }
    }

}

return stack.length() === 0 ? true: false 
// if it's equal to zero return true if not return false 

}

console.log(isValid(str));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
console.log(isValid(str5));


