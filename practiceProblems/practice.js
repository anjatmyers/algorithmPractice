
// reverse a string using js recurrsion

// let str = 'hello world';


// function reverse (str) {
//     if (str === "") {
//         return "";
//     } else {
//         return reverse(str.substr(1)) + str.charAt(0);
//         // ello world + h
//         // llo world + e + h 
//         // lo world + l + e + h 
//         // o world  + l + l + e + h
//         // ....
//         // '' + d + l + r + o + w + o + l + l + e + h
//     }
// }

// console.log(reverse(str))


// sort array from largest to smallest

function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]<arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
      return arr;
    }
    