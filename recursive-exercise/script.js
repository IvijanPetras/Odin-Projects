window.onload = () => {
  //Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
  function sumRange(n) {
    if (n == 1) return 1;
    return n + sumRange(n - 1);
  }

  console.log(sumRange(3));

  //Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

  function powerFunc(b, e) {
    if (e == 0) return 1;
    return b * powerFunc(b, e - 1);
  }

  console.log(powerFunc(2, 4));

  //Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

  function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
  }

  console.log(factorial(5));

  // Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

  function all(arr, n) {
    if (n == 1) return 1;
    return;
  }

  //fibbonaci

  function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }

  console.log(fibonacci(8));
};
