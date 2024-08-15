function solution(n) {
    let answer = 0;
    let number = n;
    while (number >= 10) {
        number = number.toString().split("").reduce((acc, cur) => (acc + Number(cur)), 0);
        answer++;
    }

    return answer;
}
