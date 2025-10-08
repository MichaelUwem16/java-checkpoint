// ==============================
// STRING MANIPULATION FUNCTIONS
// ==============================

// 1️⃣ Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2️⃣ Count Characters
function countCharacters(str) {
  return str.length;
}

// 3️⃣ Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// ==============================
// ARRAY FUNCTIONS
// ==============================

// 4️⃣ Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// 5️⃣ Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// 6️⃣ Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 7️⃣ Filter Array (example: filter even numbers)
function filterArray(arr, conditionFunc) {
  return arr.filter(conditionFunc);
}

// ==============================
// MATHEMATICAL FUNCTIONS
// ==============================

// 8️⃣ Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 9️⃣ Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 🔟 Fibonacci Sequence
function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// ==============================
// EXAMPLES (You can test below)
// ==============================

// String Examples
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("welcome to javascript")); // "Welcome To Javascript"

// Array Examples
const numbers = [3, 8, 1, 5, 9, 2];
console.log(findMax(numbers)); // 9
console.log(findMin(numbers)); // 1
console.log(sumArray(numbers)); // 28
console.log(filterArray(numbers, n => n % 2 === 0)); // [8, 2]

// Math Examples
console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]