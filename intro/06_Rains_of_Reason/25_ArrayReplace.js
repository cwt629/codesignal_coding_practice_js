function solution(inputArray, elemToReplace, substitutionElem) {
    let answer = [...inputArray];
    for (let i in answer) {
        if (inputArray[i] === elemToReplace)
            answer[i] = substitutionElem;
    }

    return answer;
}
