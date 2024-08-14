function solution(inputString) {
    // 숫자.숫자.숫자.숫자 형태인지 먼저 체크
    let regex = new RegExp(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/);
    if (!regex.test(inputString)) return false;

    // 위 형태가 확인되면, split하여 각 숫자를 판단한다
    let numberChar = inputString.split(".");
    let numbers = numberChar.map((n) => (Number(n)));
    for (let i = 0; i < numbers.length; i++) {
        // 00처럼 실제 숫자의 길이와 다른 경우에 대해 처리
        if (numbers[i].toString().length !== numberChar[i].length) return false;

        // 숫자 범위 판단
        if (numbers[i] < 0 || numbers[i] > 255) return false;
    }

    return true;
}
