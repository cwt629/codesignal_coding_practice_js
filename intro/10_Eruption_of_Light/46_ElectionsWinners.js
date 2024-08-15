function solution(votes, k) {
    let answer = 0;
    let maxData = getMax(votes);

    for (let i = 0; i < votes.length; i++) {
        let num = votes[i];

        if (num + k > maxData.max) answer++;
        else if (maxData.index.length === 1 && maxData.index[0] === i) answer++; // 현재 이미 이기고 있는 경우
    }

    return answer;
}

// 배열에서의 최대값과 그 대상들을 반환하는 함수
function getMax(arr) {
    let result = {
        max: arr[0],
        index: [0]
    };
    for (let i = 1; i < arr.length; i++) {
        if (result.max < arr[i]) {
            result = {
                max: arr[i],
                index: [i]
            };
        }
        else if (result.max === arr[i]) {
            result.index.push(i);
        }
    }

    return result;
}