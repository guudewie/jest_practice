const { capitalize, 
        reverseString,
        calculator,
        caesarCipher } = require('./jest_practice');


test("capatilize first letter", () => {
    expect(capitalize("string")).toBe("S")
} )

test("reverse string", () => {
    expect(reverseString("string")).toBe("gnirts")
})

test("calculator functions", () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.substract(1,2)).toBe(-1);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.divide(1,2)).toBe(0.5);
})

test("ceasar shift", () => {
    expect(caesarCipher("a", 1)).toBe("b");
    expect(caesarCipher("CaSe SeNsAtIvE", 1)).toBe("DbTf TfOtBuJwF");
    expect(caesarCipher("Z", 3)).toBe("C");
    expect(caesarCipher(".!,", 5)).toBe(".!,");
})