function solution(inputArray) {
    let answer = 0;
    let newArray = [...inputArray];

    // greedy algorithm
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] <= newArray[i - 1]) {
            answer += newArray[i - 1] - newArray[i] + 1; // 앞 숫자보다 딱 1 높게 설정
            newArray[i] = newArray[i - 1] + 1;
        }
    }

    return answer;
}
