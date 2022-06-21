const capitalize = require('./practice')

describe('capitalize', () => {
    test('works with a non-capitalized string', () => {
        expect(capitalize("enigma")).toBe("Enigma")
    });
    test('works with an already capitalized string', () => {
        expect(capitalize("Enigma")).toBe("Enigma")
    });
    test('fails with a number', () => {
        expect(capitalize(1320)).toBe("Enigma")
    });
    test('fails with an object', () => {
        expect(capitalize({
            "age": 18,
        })).toBe("Enigma")
    });
})