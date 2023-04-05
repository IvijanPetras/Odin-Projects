export function capitalize(string){
 let cap = string.charAt(0).toUpperCase() + string.slice(1)
 return cap
}

export function reverseString(string){
    const stringArr = string.split("")
    console.log(stringArr)
    let reversedArr = []
    for (let i = 0; i < string.length; i++) {
        reversedArr.push(stringArr.pop())
    }
    return reversedArr.join('')
}

export class Calculator{
    constructor(a,b){
        this.a = a
        this.b = b  
    }

    add(){
        return this.a + this.b
    }

    substract(){
        return this.a - this.b
    }
}

let calc = new Calculator(2,7)
console.log(calc.substract())