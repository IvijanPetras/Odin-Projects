import { capitalize, reverseString } from "./script"

test('capitalize', () => {
    expect(capitalize('ivijan')).toBe('Ivijan')
})

test('reversed string', () => {
    expect(reverseString('Ivijan')).toBe('najivI')
    expect(reverseString('Ivijan aha')).toBe('aha najivI')
})