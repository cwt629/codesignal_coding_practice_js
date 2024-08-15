function solution(st) {
    let answer = st + st + st; // 초기 임의 지정(무조건 더 크도록)
    for (let mid = Math.floor((st.length - 1) / 2); mid < st.length; mid++) {
        let right = st.substring(mid + 1);
        let rightReverse = right.split("").reverse().join("");
        // 1. 오른쪽의 대칭 형태가 기준점 제외 왼쪽의 끝부분과 일치하는 경우
        if (st.substring(mid - right.length, mid) === rightReverse) {
            // 왼쪽의 남은 부분을 거꾸로 붙인다
            let adding = st.substring(0, mid - right.length).split("").reverse().join("");
            let newString = st + adding;
            if (newString.length < answer.length) answer = newString;
        }
        // 2. 오른쪽의 대칭 형태가 기준점 포함 왼쪽의 끝부분과 일치하는 경우
        if (st.substring(mid - right.length + 1, mid + 1) === rightReverse) {
            let adding = st.substring(0, mid - right.length + 1).split("").reverse().join("");
            let newString = st + adding;
            if (newString.length < answer.length) answer = newString;
        }
    }

    return answer;
}
