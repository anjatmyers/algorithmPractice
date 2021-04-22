// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// let str = "LRDU";
//return true
// let str = "URURD";
// return false
// let str = "RUULLDRD";
// return true

const originalPosition = (str) => {
    
    let obj = {};

    for(i=0; i<str.length; i++){
        if(!(str[i] in obj)){
            obj[str[i]] = 1;
        }
        else{
            obj[str[i]] += 1;
        }
    }

    if(obj['L'] == obj["R"] && obj['U'] == obj["D"]){
        return true;
    }
    else{
        return false;
    }


}
console.log(originalPosition(str));
