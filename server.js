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

// ---------------------------------------------------------------------------------------

// 10) Palindrome

// Built-In function

function isPalin(str) {
    return str === str.split("").reverse("").join("")

}

// console.log(isPalin("ten")); //output false
// console.log(isPalin("non")); //output true

// Normal

function isP(str) {
    let p = str.length
    for (i = 0; i < p / 2; i++) {
        if (str[i] !== str[p - i - 1]) {
            return false
        }
    }
    return true
}

// console.log(isP("bob"));//output true
// console.log(isP("bobs"));//output false

// ----------------------------------------------------------------------------

// 11)Remove specific element from array

// Built-In Function

const vr = [1, 3, 4, 5, 6, 7]
const newVr = vr.filter(el => el !== 4)
// console.log(newVr); // [ 1, 3, 5, 6, 7 ]

// Normal

function nr(arr, trg) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== trg) {
            result.push(arr[i])
        }
    }
    return result
}


const q = [1, 1, 12, 34, 32,]
// console.log(nr(q, 1));  // Output [ 12, 34, 32 ]


// ------------------------------------------------------------------------------------


// 12) MERGE TWO SORTED ARRAYS

// Built-In function

const arr1 = [1, 55, 100]
const arr2 = [2, 45, 900]

const mrg = [...arr1, ...arr2].sort((a, b) => a - b)
// console.log(mrg); // Output [ 1, 2, 45, 55, 100, 900 ]


// Normal

function mrgArr(a, b) {
    for (i = 0; i < b.length; i++) {
        a.push(b[i])
    }
    for (i = 0; i < a.length; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]]
            }
        }
    }
    return a
}

// console.log(mrgArr(arr1, arr2)); //Output [ 1, 2, 45, 55, 900, 100 ]

// ----------------------------------------------------------------------------------

// 13) Factorial Number

// Built-in

function factorial(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

// console.log(factorial(5)); // Output: 120

// Normal


function facto(n) {
    if (n === 0 || n === 1) {
        return n
    }
    else {
        return n * facto(n - 1)
    }
}

// console.log(facto(4)); //output 24

// ---------------------------------------------------------------------------------

// 14) STACK

class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(ele) {
        this.items.push(ele);
    }

    pop() {
        if (this.items.length === 0) return "No elements";
        return this.items.pop(); // Return the popped element
    }

    peek() {
        if (this.items.length === 0) return "No elements"; // Handle empty case for peek
        return this.items[this.items.length - 1];
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) { // Fixed loop condition
            str += this.items[i] + " ";
        }
        return str.trim(); // Remove trailing space
    }
}

//   const newStack = new Stack();
//   newStack.push("Apple");
//   newStack.push("Ball");
//   newStack.push("Cat");

//   console.log(newStack.printStack()); // Output: Apple Ball Cat
//   console.log(newStack.peek()); // Output: Cat
//   newStack.pop();
//   console.log(newStack.peek()); // Output: Ball
//   console.log(newStack.printStack()); // Output: Apple Ball



// ---------------------------------------------------------------------------------

// 15)QUEUE

class Queue {
    constructor() {
        this.items = []; // Initialize the queue with an empty array
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Add an element to the end of the queue
    enqueue(ele) {
        this.items.push(ele);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "No elements in the queue";
        }
        return this.items.shift(); // Removes the first element
    }

    // Peek at the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the queue";
        }
        return this.items[0]; // Returns the first element
    }

    // Print all elements in the queue
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str.trim();
    }
}

// Testing the Queue

//   const newQueue = new Queue();
//   newQueue.enqueue("Apple");
//   newQueue.enqueue("Ball");
//   newQueue.enqueue("Cat");

//   console.log(newQueue.printQueue()); // Output: Apple Ball Cat
//   console.log(newQueue.peek()); // Output: Apple (first element)
//   newQueue.dequeue();
//   console.log(newQueue.peek()); // Output: Ball (next first element)
//   console.log(newQueue.printQueue()); // Output: Ball Cat


// --------------------------------------------------------------------------------


// 16)FIND SECOND LARGEST NUMBER INN ARRAY

// BuiltIn Funnction

function secondMax(arr) {
    arr.sort((a, b) => a - b).reverse()
    return arr[1]
}

const mxS = [123, 2, 43, 33, 54]
// console.log(secondMax(mxS)) //Output 54


// Normal


function secondMx(arr) {
    let max = -Infinity
    let scnd = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            scnd = max
            max = arr[i]
        }
        else if (arr[i] > scnd && arr[i] !== max) {
            scnd = arr[i]
        }
    }
    return scnd
}

// console.log(secondMx(mxS)); //Output 54

// --------------------------------------------------------------------------

// 17) SUM OF ARRAY

// Built-In Function

const array = [1, 2, 3, 4, 5];

function sumArr(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

// console.log(sumArr(array)); //Output : 15

// Normal 
// 1) ITERATIVE

function sumArray(arr) {
    let x = 0;        // declare zero here
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    }
    return x
}

// console.log(sumArray(array)); //Output : 15

// 2) RECURSIVE 

function recSum(arr, n) {
    if (n <= 0) {
        return 0
    }
    return arr[n - 1] + recSum(arr, n - 1)
}

// console.log(recSum(array , array.length));  //Output : 15

// -------------------------------------------------------------------------------


// 18) REVERSING WORDS IN A STRING 

// Built-In Function 

function reverseWords(str) {
    const wordsArray = str.split(" ");
    const reversedArray = wordsArray.reverse();
    return reversedArray.join(" ");
}

const inputString = "Hello World from JavaScript";
// console.log(reverseWords(inputString)); // Output: "JavaScript from World Hello"


// Normal

function reverseWordLoop(str) {
    let wrds = str.split(" ")
    let resultWords = ""

    for (let i = wrds.length - 1; i >= 0; i--) {
        resultWords += wrds[i] + " "
    }
    return resultWords.trim()
}

// console.log(reverseWordLoop(inputString));  // Output: "JavaScript from World Hello"


// ----------------------------------------------------------------------------------------


// 19) FIND THE MISSING NUMBER IN ARRAY


// Built-In Function


function findMissingNumberWithBuiltIn(arr) {
    const n = arr.length + 1; // Total count including the missing number
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return expectedSum - actualSum;
}

const arrayNum = [1, 2, 3, 5, 6];
// console.log(findMissingNumberWithBuiltIn(arrayNum)); // Output: 4


// Normal 

function findMissingNumber(arr) {
    const n = arr.length + 1
    const expected = (n * (n + 1)) / 2
    let actual = 0

    for (let i = 0; i < arr.length; i++) {
        actual += arr[i]
    }
    return expected - actual
}

// console.log(findMissingNumber(arrayNum)); // Output: 4

// 20)Count the Letters in string

function countLetters(str) {
    let strEle = str.toLowerCase()
    let letterCount = {}

    for (let char of strEle) {
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }
    return letterCount
}

// console.log(countLetters("Bijju")); //Output { b: 1, i: 1, j: 2, u: 1 }
