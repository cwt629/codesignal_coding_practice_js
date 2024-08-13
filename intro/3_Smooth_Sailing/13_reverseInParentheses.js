function solution(inputString) {
    // stack 활용
    let stack = [];

    for (let i = 0; i < inputString.length; i++) {
        // )을 만난 경우, (을 만날 때까지 stack에서 제일 오래 된 순으로 문자열을 만들고 이를 거꾸로 하여 새로 저장
        if (inputString[i] === ")") {
            let newString = "";
            while (stack[stack.length - 1] !== "(") {
                let block = stack.pop();
                newString = block + newString;
            }
            stack.pop(); // 소괄호 자체를 pop해주기
            stack.push(newString.split("").reverse().join(""));
            continue;
        }
        // 그 외의 경우는 문자 하나하나 모두 저장 
        stack.push(inputString[i]);
    }

    // 만들어진 stack을 앞에서부터 이어준다
    return stack.join("");
}
