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




