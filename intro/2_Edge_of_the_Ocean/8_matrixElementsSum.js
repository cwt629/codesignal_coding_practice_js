function solution(matrix) {
    let sum = 0;
    // column별로 수행하되, 0을 만나면 다음 column으로 넘어간다
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][col] === 0)
                break;

            sum += matrix[row][col];
        }
    }

    return sum;
}
