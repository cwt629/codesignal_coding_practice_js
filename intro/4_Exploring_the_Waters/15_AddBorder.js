function solution(picture) {
    let horizLength = picture[0].length, vertLength = picture.length;
    let rowEnd = Array.from({ length: horizLength + 2 }, () => ("*")).join(""); // 맨 위와 아래에 들어갈 문자열
    let answer = [rowEnd];

    // 원래 있던 문자열의 양옆에 별 붙여서 push
    picture.forEach((r) => {
        answer.push("*" + r + "*");
    })

    // 마지막 문자열
    answer.push(rowEnd);

    return answer;
}
