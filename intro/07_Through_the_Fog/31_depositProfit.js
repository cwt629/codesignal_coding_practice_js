function solution(deposit, rate, threshold) {
    /* 
    다음 공식을 만족하는 최소 n을 찾으면 된다.
    n >= log_((100+rate) / 100)에 진수 부분은 (threshold / deposit)
    */
    let min = Math.log(threshold / deposit) / Math.log(1 + rate / 100);
    return Math.ceil(min);
}
