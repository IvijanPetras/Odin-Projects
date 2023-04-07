export function capitalize(string) {
  let cap = string.charAt(0).toUpperCase() + string.slice(1);
  return cap;
}

export function reverseString(string) {
  const stringArr = string.split("");
  console.log(stringArr);
  let reversedArr = [];
  for (let i = 0; i < string.length; i++) {
    reversedArr.push(stringArr.pop());
  }
  return reversedArr.join("");
}

export class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  substract() {
    return this.a - this.b;
  }

  divide() {
    let division = this.a / this.b;
    return +division.toFixed(1);
  }

  multipy() {
    return this.a * this.b;
  }
}

export const caesar = function (string, shift) {
  const codeSet = (code) => (code < 97 ? 65 : 97);

  const mod = (n, m) => ((n % m) + m) % m;

  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  };

  return string
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};


export function analyzeArray(arr){
    const avrg = arr.reduce((acc,current) => acc + current, 0) / arr.length
    const min = Math.min.apply(Math,arr)
    const max = Math.max.apply(Math,arr)
    const length = arr.length
    
    return {
        average: avrg,
        min: min,
        max: max,
        length: length
    }
}

analyzeArray([1, 2, 3, 4]);
