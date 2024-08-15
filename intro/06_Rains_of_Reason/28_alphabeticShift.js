function solution(inputString) {
    const ASCII_OF_A = "a".charCodeAt(0);
    let answer = "";
    for (let i = 0; i < inputString.length; i++) {
        let alphabet = inputString.charAt(i);
        let num = ((alphabet.charCodeAt(0) - ASCII_OF_A) + 1) % 26; // a에서부터 몇칸 오른쪽으로 가야하는지
        answer += String.fromCharCode(ASCII_OF_A + num);
    }

    return answer;
}
