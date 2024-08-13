function solution(n) {
    let leftArray = n.toString().substring(0, n.toString().length / 2).split("").map((char) => (Number(char))),
        rightArray = n.toString().substring(n.toString().length / 2).split("").map((char) => (Number(char)));

    return leftArray.reduce((acc, cur) => (acc + cur), 0) === rightArray.reduce((acc, cur) => (acc + cur), 0);
}
