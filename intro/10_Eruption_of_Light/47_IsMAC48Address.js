function solution(inputString) {
    let regex = new RegExp(/^[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$/);
    return regex.test(inputString);
}
