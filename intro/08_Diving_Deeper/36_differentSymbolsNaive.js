function solution(s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (!map.has(char)) {
            map.set(char, 1);
        }
        // 개수를 더해줄 필요는 없음
    }

    // 구한 map의 key 개수를 센다
    return map.size;
}
