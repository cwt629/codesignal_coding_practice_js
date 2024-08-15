function solution(n) {
    let digits = n.toString().split("").map((d) => (Number(d)));
    for (let digit of digits) {
        if (digit % 2 === 1)
            return false;
    }

    return true;
}
