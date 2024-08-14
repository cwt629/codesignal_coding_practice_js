function solution(n, firstNumber) {
    // 반바퀴 돌게 되면 더해지는 수
    let toAdd = n / 2; // n은 짝수이므로 정수로 보장
    return (firstNumber + toAdd) % n;
}
