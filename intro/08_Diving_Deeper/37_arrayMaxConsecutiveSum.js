function solution(inputArray, k) {
    // 슬라이딩 윈도우 방식
    let sum = 0;
    // 초기 합 구하기
    for (let i = 0; i < k; i++) sum += inputArray[i];

    let max = sum;
    // 한칸씩 이동하며 계산
    for (let i = 1; i < inputArray.length - k + 1; i++) {
        sum = sum - inputArray[i - 1] + inputArray[i + k - 1];
        if (sum > max) max = sum;
    }

    return max;
}
