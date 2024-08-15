function solution(inputString) {
    const ASCII_OF_0 = '0'.charCodeAt(0), ASCII_OF_9 = '9'.charCodeAt(0);

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        let ascii = char.charCodeAt(0);

        if (ascii >= ASCII_OF_0 && ascii <= ASCII_OF_9)
            return char;
    }

    return '';
}
