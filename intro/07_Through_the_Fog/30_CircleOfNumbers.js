function solution(n, firstNumber) {
    let distance = n / 2;
    return (firstNumber + distance) % n;
}
