function solution(s1, s2) {
    let answer = 0;
    const ASCII_OF_A = 'a'.charCodeAt(0);
    let alphaCounts = [Array.from({ length: 26 }, () => (0)), Array.from({ length: 26 }, () => (0))];

    // 각 알파벳의 숫자 계산
    s1.split("").forEach((alpha) => {
        let currentAscii = alpha.charCodeAt(0);
        alphaCounts[0][currentAscii - ASCII_OF_A]++;
    })
    s2.split("").forEach((alpha) => {
        let currentAscii = alpha.charCodeAt(0);
        alphaCounts[1][currentAscii - ASCII_OF_A]++;
    })

    // 알파벳 별로 개수 산출
    for (let i = 0; i < 26; i++) {
        // 둘 다 0이 아닌 경우, 둘 중 더 작은 값만큼 겹친다
        if (alphaCounts[0][i] * alphaCounts[1][i] > 0) {
            answer += (alphaCounts[0][i] < alphaCounts[1][i]) ? alphaCounts[0][i] : alphaCounts[1][i];
        }
    }

    return answer;
}
