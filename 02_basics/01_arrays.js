// array

const myArr = [ 1, 2, 3, 4, 5]
const myHeroes = ["Shatiman", "hulk"]

console.log(myArr[3]);

// another way to declare array
const myArr2 = new Array(0, 1, 2, 3, 4)

// Arrray methods

myArr.push(6)
console.log(myArr)

myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof (newArr))

//slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);
// the one differnce between slice and splice is that in slice it does not print the last one but in splice it prints and 
// the another diffrence is that slice does not change or manipulate the original array but splice does.....

