function solution(matrix) {
    let answer = [];

    for (let row = 0; row < matrix.length; row++) {
        answer[row] = [];

        for (let col = 0; col < matrix[row].length; col++) {
            let count = 0;
            // 왼쪽 위
            if (row > 0 && col > 0 && matrix[row - 1][col - 1]) count++;
            // 바로 위
            if (row > 0 && matrix[row - 1][col]) count++;
            // 오른쪽 위
            if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1]) count++;
            // 바로 왼쪽
            if (col > 0 && matrix[row][col - 1]) count++;
            // 바로 오른쪽
            if (col < matrix[row].length - 1 && matrix[row][col + 1]) count++;
            // 왼쪽 아래
            if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1]) count++;
            // 바로 아래
            if (row < matrix.length - 1 && matrix[row + 1][col]) count++;
            // 오른쪽 아래
            if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1]) count++;

            answer[row].push(count);
        }
    }

    return answer;
}
