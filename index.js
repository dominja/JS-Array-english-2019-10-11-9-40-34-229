// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
b.push(a);
for (var i=0; i<b.length;i++) {
    console.log(typeof b[i]);
}


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i=0; i<a.length;i++) {
    console.log(a[i]*2);
}

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.toString());



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((x, y) => y-x));




// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var switchMap = new Map();

//TODO should output: 'a'
const countOccurrence = new Map([...new Set(a)].map(
    x => [x, a.filter(y => y === x).length]
));
let arrayValues=Array.from(countOccurrence.values());
let arrayKeys=Array.from(countOccurrence.keys());

for (var i=0; i<arrayKeys.length; i++) {
    switchMap.set(arrayValues[i],arrayKeys[i]);
}
arrayValues.sort();
console.log(switchMap.get(arrayValues[arrayValues.length-1]));
