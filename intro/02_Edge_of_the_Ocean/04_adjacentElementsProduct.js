function solution(inputArray) {
    let max = inputArray[0] * inputArray[1];

    // 완전선형탐색
    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (max < product)
            max = product;
    }

    return max;
}