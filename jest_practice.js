function capitalize(string) {
    return Array.from(string).shift().toUpperCase()
};

function reverseString(string) {
    let letterArray = Array.from(string);
    let reverseString = "";
    while (letterArray.length !== 0) {
        reverseString += letterArray.pop()
    }
    return reverseString
}

const calculator = {
    add: (a, b) => { return a + b },
    substract: (a, b) => { return a - b },
    multiply: (a, b) => { return a * b },
    divide: (a, b) => { return a / b },
}

function caesarCipher(string, n) {

    const shiftLetter = (letter, n) => {

        let alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
          ];
    
        for (let index in alphabet) {
            if (alphabet[index] === letter) return alphabet[calculateShiftedIndex(index, n)]
        };
    }

    const calculateShiftedIndex = (index, shift) => {
        index = parseInt(index)
        if (index + shift <= 25) return index + shift
        return index + shift - 26
    }
    
    let stringArray = Array.from(string)
    let finalString = "";

    stringArray.map((l) => finalString += shiftLetter(l, n))

    return finalString;

}




module.exports = {  capitalize,
                    reverseString,
                    calculator,
                    caesarCipher };