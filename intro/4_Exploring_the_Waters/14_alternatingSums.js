function solution(a) {
    let answer = [0, 0];
    a.forEach((weight, index) => {
        answer[index % 2] += weight;
    })

    return answer;
}
