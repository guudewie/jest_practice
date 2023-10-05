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

        if (letter == " " ||
            letter == "," ||
            letter == "." ||
            letter == "!" ||
            letter == "?" ||
            letter == ";" ||
            letter == ":") return letter

        let alphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
          ];
    
        for (let index in alphabet) {
            if (alphabet[index] === letter.toLowerCase()) {

                let shiftedLetter = alphabet[calculateShiftedIndex(index, n)]
                return (letter.toLowerCase() === letter) 
                            ? shiftedLetter
                            : shiftedLetter.toUpperCase()
            }
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
};

function analyzeArray(array) {

    let length = array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let average = array.reduce((a,b) => a + b,0 ) / length

    return {average: average,
            min: min,
            max: max,
            length: length}
};




module.exports = {  capitalize,
                    reverseString,
                    calculator,
                    caesarCipher,
                    analyzeArray };