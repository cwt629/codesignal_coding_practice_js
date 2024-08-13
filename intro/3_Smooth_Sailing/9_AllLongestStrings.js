function solution(inputArray) {
    let longestLength = -1;
    inputArray.forEach((str) => {
        if (str.length > longestLength)
            longestLength = str.length;
    })

    return inputArray.filter((str) => (str.length === longestLength));
}