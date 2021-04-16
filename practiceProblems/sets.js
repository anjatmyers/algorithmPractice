// SETS: avoids saving duplicate data, cannot access via index but can use spread operator to turn back into an array 
const myArr = [3, 4, 2, 1, 5, 4, 3, 2, 1, 5, 5, 5];
const mySet = new Set(myArr);
// console.log(myArr);
// console.log(mySet);
// const uniqueArr = [...mySet].sort();
// console.log(uniqueArr);

mySet.add(6);

console.log(mySet)
mySet.delete(3);
console.log(mySet)

mySet.add(3);
mySet.add(3);
mySet.add(3);
console.log(mySet)
console.log(mySet.has(3));
console.log(mySet.size);

const setArr = [...mySet].sort();
console.log(setArr);
// mySet.clear();
// console.log(mySet)