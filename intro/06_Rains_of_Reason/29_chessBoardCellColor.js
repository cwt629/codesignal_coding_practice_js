function solution(cell1, cell2) {
    // 맨해튼 거리가 짝수면 같고, 홀수면 다르다
    let coord1 = cell1.split(""), coord2 = cell2.split("");

    let xGap = Math.abs(coord1[0].charCodeAt(0) - coord2[0].charCodeAt(0)); // x거리
    let yGap = Math.abs(Number(coord1[1]) - Number(coord2[1]));

    return (xGap + yGap) % 2 === 0;
}
