function solution(a) {
    // 오름차순 정렬되어 있으므로, 앞에서부터 완전탐색하면 된다
    let min = Infinity, answer = -1;

    for (let num of a) {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += Math.abs(a[i] - num);
        }

        if (min > sum) {
            min = sum;
            answer = num;
        }
    }

    return answer;
}
