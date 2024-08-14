function solution(n) {
    let hour = Math.floor(n / 60), minute = n - hour * 60;
    let hourSum = hour.toString().split("").reduce((acc, cur) => (acc + Number(cur)), 0),
        minuteSum = minute.toString().split("").reduce((acc, cur) => (acc + Number(cur)), 0);

    return hourSum + minuteSum;
}
