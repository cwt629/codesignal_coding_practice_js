function solution(inputString) {
    let index = 0;
    while (index < inputString.length && /[0-9]/.test(inputString.charAt(index))) index++;

    return inputString.substring(0, index);
}
