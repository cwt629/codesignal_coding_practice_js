function solution(upSpeed, downSpeed, desiredHeight) {
    // 밤까지 보내야 하는 일 수 계산
    let fullDay = (desiredHeight - upSpeed) / (upSpeed - downSpeed);

    return (fullDay >= 0) ? Math.ceil(fullDay) + 1 : 1;
}
