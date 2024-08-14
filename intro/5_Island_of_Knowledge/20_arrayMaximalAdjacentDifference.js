function solution(inputArray) {
    let diffs = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
        diffs.push(Math.abs(inputArray[i + 1] - inputArray[i]));
    }

    return Math.max(...diffs);
}
