function solution(image) {
    let answer = [];
    for (let row = 1; row < image.length - 1; row++) {
        answer[row - 1] = [];
        for (let col = 1; col < image[0].length - 1; col++) {
            let average = (image[row - 1][col - 1] + image[row - 1][col] + image[row - 1][col + 1]
                + image[row][col - 1] + image[row][col] + image[row][col + 1]
                + image[row + 1][col - 1] + image[row + 1][col] + image[row + 1][col + 1]) / 9;
            answer[row - 1].push(Math.floor(average));
        }
    }

    return answer;
}
