function solution(inputString) {
    let alphaCount = Array.from({ length: 26 }, () => (0));
    const ASCII_OF_A = "a".charCodeAt(0);

    // 각 알파벳의 숫자 세기
    for (let i = 0; i < inputString.length; i++) {
        let ascii = inputString[i].charCodeAt(0);
        alphaCount[ascii - ASCII_OF_A]++;
    }

    // 개수가 홀수개인 알파벳 숫자 세기
    let oddCount = 0;
    for (let count of alphaCount) {
        if (count % 2 === 1) oddCount++;
    }

    // 문자열의 전체 길이가 짝수면 홀수알파벳이 존재하면 안되고, 홀수면 단 1개까지만 존재할 수 있다
    return (inputString.length % 2 === 0 && oddCount === 0) || (inputString.length % 2 === 1 && oddCount <= 1);
}
