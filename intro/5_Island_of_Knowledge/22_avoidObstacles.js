function solution(inputArray) {
    // 완전탐색
    for (let i = 1; i <= 1000; i++) {
        let able = true;
        for (let obstacle of inputArray) {
            if (obstacle % i === 0) {
                able = false;
                break;
            }
        }
        if (able) return i;
    }
    return 1001;
}
