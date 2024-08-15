function solution(a) {
    let people = [], // 사람 키만 모아둔 것
        treeIndex = []; // 나무의 인덱스

    a.forEach((height, i) => {
        if (height > 0)
            people.push(height);
        else
            treeIndex.push(i);
    });

    // 사람 키만 따로 정렬한다
    people.sort((a, b) => (a - b));

    // 나무 위치에는 다시 나무를 심어주고, 아닌 곳은 순서대로 사람 배치
    let answer = [];
    let peopleIndex = 0;
    for (let i = 0; i < a.length; i++) {
        if (treeIndex.includes(i))
            answer.push(-1);
        else
            answer.push(people[peopleIndex++]);
    }

    return answer;
}
