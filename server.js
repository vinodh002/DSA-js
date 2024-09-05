const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`Server Running on ${port}`);
})

// 1) Reverse string 

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


// 2) Bubble Sort

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


