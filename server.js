const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Server Running on ${port}`);
})

// 1) REVERSE STRING

//  builtin function
function strRev(value) {
    return value.split('').reverse().join('')
}

// console.log(strRev("race"));  //output : ecar


// normal

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("hello")); // Output: "olleh"

// -------------------------------------------------------------------------------------------


// 2) BUBBLE SORT

//  builtin function
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers); // Output: [11, 12, 22, 25, 64]


// normal

function bbl(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// console.log(bbl(numbers));  //output : [ 11, 12, 22, 25, 64 ]


// ----------------------------------------------------------------------------------

// 3) LINEAR SEARCH

// builtin fn

const ln = numbers.indexOf(22)
// console.log(ln);  input const numbers = [64, 25, 12, 22, 11];  //output : [2]


// normal

function linearSr(arr, trg) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === trg) {
            return i
        }
    }
    return -1
}
const val = [10, 20, 30, 40, 50];
// console.log(linearSr(val , 50))  //output 4

// -----------------------------------------------------------------------------------


// 4)REMOVING DUPLICATE FROM ARRAY 

// inbuilt fn
const dpArr = [10, 1, 11, 10, 20]

const newArr = [...new Set(dpArr)]
// console.log(newArr);  output : [ 10, 1, 11, 20 ]


// normal

function removeArr(arr) {
    let uq = []
    for (i = 0; i < arr.length; i++) {
        if (uq.indexOf(arr[i]) === -1) {
            uq.push(arr[i])
        }
    }
    return uq
}

// console.log(removeArr(dpArr));

// -------------------------------------------------------------------


// 5) Find Max Element in array

// built-in fn

const numb = [64, 25, 12, 22, 11];
const maxNumbers = (Math.max(...numb))
// console.log(maxNumbers);   //outpuut 64


// normal

function findMax(arr) {
    let max = arr[0]
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


// console.log(findMax(numb)); //output 64

// ------------------------------------------------------------------

// 6) Fibonnaci sequence

// Built-in Function

function fibonacci(n) {
    return Array.from({ length: n }, () => 0).reduce((acc, _, i) => {
        if (i <= 1) return [...acc, i];
        return [...acc, acc[i - 1] + acc[i - 2]];
    }, []);
}

// Generate the first 10 numbers in the Fibonacci sequence
//   console.log(fibonacci(10));  //output [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]

// normal

function fbN(n) {
    const fib = [0, 1]
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

// console.log(fbN(6)); //outut [ 0, 1, 1, 2, 3, 5 ]

// --------------------------------------------------------------------------------


// 7) Flattening a Nested Array 

// Built-in function


// const nestedArray = [1, [2, [3, [10, 11, 12, [13, 14], 15, 16], 4], 5], 6];
// const flatArr = nestedArray.flat(Infinity)
// console.log(flatArr);


// normal

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i])
        }
    }
    return result
}

const nestedArray = [1, [2, [3, [10, 11, 12, [13, 14], 15, 16], 4], 5], 6];
// console.log(flattenArray(nestedArray)); // output [ 1,  2,  3, 10, 11, 12, 13, 14, 15, 16,  4,  5,   6]

// ------------------------------------------------------------------------


// 8) Random Numbers

// Built-in function and normal 

function genarateRandom(n) {
    return Math.floor(Math.random() * n)
}
// console.log(genarateRandom(10)); output random number 1 to 9

// -------------------------------------------------------------------------


// 9) Binary Search


// Built-in function 

const bnSerach = [2, 3, 4, 10, 40];
bnSerach.sort((a, b) => a - b); // Ensure array is sorted
const target = 10;
const index = bnSerach.findIndex(x => x === target);
// console.log(index !== -1 ? index : -1); // Output: 3


// Normal

function binarySearch(arr, trg) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === trg) {
            return mid
        }
        else if (arr[mid] < trg) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

const r = [2, 3, 4, 10, 40];
// console.log(binarySearch(r, 10)); // Output: 3
// console.log(binarySearch(r, 5));  // Output: -1










