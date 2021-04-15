jewels1 = "abc"
stones1 = "ab" 
// return 2
jewels2 = "Af"
stones2 = "AaaddfFf"
// return 3
jewels3 = "AYOPD"
stones3 = "ayopd"
// return 0

const numStones = (jewels, stones) => {
    let jewelObj = {};
    let stoneObj = {};
    let num = 0;

    for(i = 0; i < jewels.length; i++){
        
        if(jewels[i] in jewelObj){
            jewelObj[jewels[i]] += 1;
        }
        else if(!(jewels[i] in jewelObj)){
            jewelObj[jewels[i]] = 1;
        }

    }

    for(i = 0; i < stones.length; i++){
        
        if(stones[i] in stoneObj){
            stoneObj[stones[i]] += 1;
        }
        else if(!(stones[i] in stoneObj)){
            stoneObj[stones[i]] = 1;
        }

    }

    // console.log(jewelObj);
    // console.log(stoneObj);

    for(let key in jewelObj){
        if(key in stoneObj){
            if(stoneObj[key] > jewelObj[key]){
                num += stoneObj[key];
            }
            else if(jewelObj[key] > stoneObj[key]){
                num += jewelObj[key];
            }
            else{
                num += stoneObj[key];
            }
        }
    }

    return num;

}

console.log(numStones(jewels3, stones3));
