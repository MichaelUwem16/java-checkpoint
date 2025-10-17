// writing for string //
// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Count Characters in a String
function countCharacters(str) {
  return str.length;
}

// Capitalize the First Letter of Each Word
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

//* writing for array *//
// Find Maximum Value in an Array
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum Value in an Array
function findMin(arr) {
  return Math.min(...arr);
}

// Calculate the Sum of All Elements in an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array Based on a Condition
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

//* writing for mathematical *//
// Calculate Factorial of a Number
function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Check if a Number is Prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Generate Fibonacci Sequence up to n Terms
function fibonacci(n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}


//* writing for sample usage *//
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMax([3, 7, 2])); // 7
console.log(findMin([3, 7, 2])); // 2
console.log(sumArray([1, 2, 3])); // 6
console.log(filterArray([10, 20, 30], num => num > 15)); // [20, 30]

console.log(factorial(5)); // 120
console.log(isPrime(11)); // true
console.log(fibonacci(6)); // [0, 1, 1, 2, 3, 5]
