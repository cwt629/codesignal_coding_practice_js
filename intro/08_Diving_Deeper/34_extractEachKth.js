function solution(inputArray, k) {
    let answer = [];
    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k === 0) continue;
        answer.push(inputArray[i]);
    }

    return answer;
}
