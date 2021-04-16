// MAPS

// const myMap = new Map([['first', 'andrea'],['last', 'myers']]);
// console.log(myMap);




// Maps solve the problem that Objects will only remember the last key stored
// const myObj = {};

// const a = {};
// const b = {};

// myObj[a] = 'a';
// myObj[b] = 'b';

// console.log(myObj);


// const a = {};
// const b = {};

// const myMap = new Map([[a, 'a'], [b, 'b']]);

// console.log(myMap);


// METHODS
const myMap = new Map([[{}, 'a'], [{}, 'b']]);

// set: can use an object, string or number
myMap.set({}, 'c');
myMap.set(4, 'd');
myMap.set(5, 'e');

// delete: deletes by key

// myMap.delete(4);


// has: tells if you have a key or not in the map
console.log(myMap.has(5)); //true
console.log(myMap.has(4)); //false


// size: tells how many elements the map has
console.log(myMap.size);


// clear 
// myMap.clear();

console.log(myMap);

console.log((myMap.get(4) == myMap.get(5)))

console.log("*********************************");


const myMap2 = new Map();
count = 5;
myMap2.set('b', 1);
myMap2.set('c', 2);
myMap2.set('d', 3);
myMap2.set('a', 0);
myMap2.set('a', myMap2.get('a') + 1);
myMap2.set('a', myMap2.get('a') + 1);
myMap2.set('a', myMap2.get('a') + 1);
myMap2.set('a', myMap2.get('a') + count);

console.log(myMap2);
console.log(myMap2.get('a'))

for(let key of myMap2.keys()){
    console.log(`key is ${key}`)
}

for(let value of myMap2.values()){
    console.log(`Value is ${value}`)
}

// FOR LOOP ALWAYS GIVES KEY THEN VALUE******
for(let [key, value] of myMap2){
    console.log(`Key is ${key} and value is ${value}`);
}
console.log("<<<<<<<<<<<<<<<")

// with the For Each loop it understands you are trying to do something with the values and treats the keys like indexes, where with the for let loop above they give the values and keys as asked for 

myMap.forEach((key) => console.log(`${key}`))
myMap.forEach((value) => console.log(`${value}`))
// to get the key and the value put the value first 
// FOREACH ALWAYS GIVES VALUE THEN KEY******
myMap.forEach((value, key) => console.log(`value: ${value}, key is ${key}`))








// ..........................

// function hashStringToInt(s){
//     return 5;
// }

// class HashTable {

//     table = new Array(100)

//     setItem = (key, value) => {
//         const idx = hashStringToInt(key)
//         this.table[idx] = value
//     }

//     getItem = (key) => {
//         const idx = hashStringToInt(key)
//         return this.table;
//     }
// }

// const myTable = new HashTable();

// myTable.setItem('firstName', 'bob');
// myTable.getItem('firstName');
// console.log(myTable.getItem('firstName'));




// SETS: avoids saving duplicate data, cannot access via index but can use spread operator to turn back into an array 
// const myArr = [3, 4, 2, 1, 5, 4, 3, 2, 1, 5, 5, 5];
// const mySet = new Set(myArr);
// // console.log(myArr);
// // console.log(mySet);
// // const uniqueArr = [...mySet].sort();
// // console.log(uniqueArr);

// mySet.add(6);

// console.log(mySet)
// mySet.delete(3);
// console.log(mySet)

// mySet.add(3);
// mySet.add(3);
// mySet.add(3);
// console.log(mySet)
// console.log(mySet.has(3));
// console.log(mySet.size);

// const setArr = [...mySet].sort();
// console.log(setArr);
// mySet.clear();
// console.log(mySet)