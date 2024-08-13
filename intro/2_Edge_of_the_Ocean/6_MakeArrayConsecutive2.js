function solution(statues) {
    let min = Math.min(...statues), max = Math.max(...statues);

    // 주어진 배열은 distinct한 배열이므로, 부족한 개수만큼 그냥 채워준다
    let answer = (max - min + 1) - statues.length;

    return answer;
}