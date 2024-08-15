function solution(bishop, pawn) {
    // row차이와 col차이가 일치하면 잡을 수 있다.
    let [bishopX, bishopY] = bishop.split("");
    let [pawnX, pawnY] = pawn.split("");

    let xGap = Math.abs(bishopX.charCodeAt(0) - pawnX.charCodeAt(0)),
        yGap = Math.abs(Number(bishopY) - Number(pawnY));

    return xGap === yGap;
}
