function solution(a, b) {
    return hasSameElements(a, b) && getDifferences(a, b) <= 2;
}

// 두 배열을 이루는 요소들이 일치하는지 판단하는 함수
function hasSameElements(arr1, arr2) {
    let countMap1 = new Map(), countMap2 = new Map();

    arr1.forEach((num) => {
        if (!countMap1.has(num))
            countMap1.set(num, 1);
        else countMap1.set(num, countMap1.get(num) + 1);
    })
    arr2.forEach((num) => {
        if (!countMap2.has(num))
            countMap2.set(num, 1);
        else countMap2.set(num, countMap2.get(num) + 1);
    })

    // 두 map 비교(길이가 같으므로 1을 기준으로만 비교해도 됨)
    let flag = true;
    countMap1.forEach((val, key) => {
        if (!countMap2.has(key) || countMap2.get(key) !== val)
            flag = false;
    })

    return flag;
}

// 두 배열에서 불일치하는 인덱스의 개수를 반환하는 함수
function getDifferences(arr1, arr2) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            result++;
    }

    return result;
}