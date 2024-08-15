function solution(inputArray) {
    let orders = getPermutation(inputArray, inputArray.length);

    for (let order of orders) {
        // 정확히 하나씩 다른지 확인
        let able = true;
        for (let i = 0; i < order.length - 1 && able; i++) {
            let prev = order[i], next = order[i + 1];
            let count = 0;
            for (let j = 0; j < prev.length; j++) {
                if (prev[j] !== next[j]) {
                    count++;
                    if (count > 1) {
                        able = false;
                        break;
                    }
                }
            }
            // 정확히 1개가 달라야 함
            if (count !== 1) able = false;
        }

        if (able) return true;
    }

    return false;
}

// 진행 순서를 모두 반환하는 함수
function getPermutation(array, selectionRemaining) {
    if (selectionRemaining === 0) return [array];
    let result = [];

    array.forEach((elem, index, origin) => {
        let nextArray = [...origin.slice(0, index), ...origin.slice(index + 1)];
        let perm = getPermutation(nextArray, selectionRemaining - 1);
        result.push(...perm.map((arr) => ([elem, ...arr])));
    })

    return result;
}