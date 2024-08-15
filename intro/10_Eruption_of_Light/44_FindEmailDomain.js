function solution(address) {
    let parts = address.split("@");
    // local part에는 큰따옴표 안에 @이 들어있는 경우도 있으므로, 맨 마지막 part를 불러온다
    return parts[parts.length - 1];
}
