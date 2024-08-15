function solution(name) {
    // 첫째가 숫자로 시작하는지 확인
    if (/^[0-9]/.test(name)) return false;

    // 영어 대소문자, 숫자, _로 이루어져 있는지 확인
    return /^[0-9a-zA-Z\_]*$/.test(name);
}
