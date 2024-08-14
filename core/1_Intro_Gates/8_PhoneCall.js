function solution(min1, min2_10, min11, s) {
    let cash = s;
    // 첫 1분
    if (min1 > cash) return 0;
    cash -= min1;

    // 2~10분
    let ableTime = Math.floor(cash / min2_10);
    if (ableTime <= 9) return ableTime + 1;
    cash -= min2_10 * 9;

    // 11분 이상
    ableTime = Math.floor(cash / min11);
    return ableTime + 10;
}
