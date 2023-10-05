const { capitalize, 
        reverseString,
        calculator,
        caesarCipher,
        analyzeArray } = require('./jest_practice');


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
    expect(caesarCipher("Caesar Cipher?", 14)).toBe("Qosgof Qwdvsf?")
});

test("analyze Array", () => {
    const object = analyzeArray([1,2,3,4]);
    expect(object.average).toBe(2.5);
    expect(object.min).toBe(1);
    expect(object.max).toBe(4);
    expect(object.length).toBe(4);
})