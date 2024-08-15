function solution(inputString) {
    const ASCII_OF_A = "a".charCodeAt(0);
    let alphaCount = Array.from({ length: 26 }, () => (0));

    // 각 알파벳의 등장 횟수 세기
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString.charAt(i);
        alphaCount[char.charCodeAt(0) - ASCII_OF_A]++;
    }

    let prevCount = alphaCount[0];
    for (let count of alphaCount) {
        if (count > prevCount) return false;
        prevCount = count;
    }

    return true;
}
