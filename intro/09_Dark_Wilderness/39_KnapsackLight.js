function solution(value1, weight1, value2, weight2, maxW) {
    // 가져가는 모든 4가지 경우에 대해 모두 확인하자.
    let max = 0;

    // 1. 2가지 모두 가져가기
    if (weight1 + weight2 <= maxW)
        max = value1 + value2;
    // 2. 1번만 가져가기
    if (weight1 <= maxW && value1 > max) {
        max = value1;
    }
    // 3. 2번만 가져가기
    if (weight2 <= maxW && value2 > max) {
        max = value2;
    }

    return max;
}
