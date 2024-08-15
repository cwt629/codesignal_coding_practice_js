function solution(n) {
    // dp 활용
    let dp = [1]; // 초기는 원래 0이지만, 계산의 편의를 위한 초기값

    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1] + 4 * (i - 1);
    }

    return dp[n];
}