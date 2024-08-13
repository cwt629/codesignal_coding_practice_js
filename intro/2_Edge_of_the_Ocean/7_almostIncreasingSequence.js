function solution(sequence) {
    let passed = false;
    let prev = sequence[0];

    for (let i = 1; i < sequence.length; i++) {
        let current = sequence[i];
        if (prev >= current) {
            if (passed)
                return false; // 이미 패스되었을 경우는 불가능

            passed = true;
            // 중간에 막힌 경우, 막힌 두 숫자 중 하나라도 이 두 숫자의 양옆 숫자 사이에 있는지 판단
            if (i > 1 && i < sequence.length - 1 && !(isNumberBetween(prev, sequence[i - 2], sequence[i + 1]) || isNumberBetween(current, sequence[i - 2], sequence[i + 1])))
                return false;
        }
        // 비교 대상 바꾸기
        prev = current;
    }

    // 모두 패스한 경우
    return true;
}

// 특정 숫자가 특정 두 숫자 사이에 있는지 판단하는 함수
function isNumberBetween(number, n1, n2) {
    return number > n1 && number < n2;
}
