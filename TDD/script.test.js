import expect from "expect"
import { capitalize, reverseString, Calculator, caesar, analyzeArray } from "./script"

test('capitalize', () => {
    expect(capitalize('ivijan')).toBe('Ivijan')
})

test('reversed string', () => {
    expect(reverseString('Ivijan')).toBe('najivI')
    expect(reverseString('Ivijan aha')).toBe('aha najivI')
})

let calc = new Calculator(2,7)

test('calc test', () => {
    expect(calc.add()).toBe(9)
    expect(calc.substract()).toBe(-5)
    expect(calc.divide()).toBe(0.3)
    expect(calc.multipy()).toBe(14)
})

test('ceaser', () => {
    expect(caesar('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
    expect(caesar('defend the east wall of the castle', 0)).toBe('defend the east wall of the castle')
    expect(caesar('defend the east wall of the castle.==', 0)).toBe('defend the east wall of the castle.==')
})

test('array analyze', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        expect.objectContaining({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    )
})