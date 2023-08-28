const animationDuration = 2000; // 2秒的動畫時間
const frameDuration = 1000 / 60; // 每幀的時間
const totalFrames = Math.round(animationDuration / frameDuration);
// 計算出每個數字替換的時間，這裡的 frameDuration 被設置為 1000 / 60 毫秒，大約是 16.67 毫秒

export const numberAnimation = (startNumber, targetNumber, elementId) => {
    const counterElement = document.getElementById(`${elementId}`);
    let currentNumber = startNumber;
    const increment = (targetNumber - currentNumber) / totalFrames;

    const updateCounter = () => {
        if (startNumber < targetNumber) { // 遞增
            currentNumber += increment
            // console.log(currentNumber);
            counterElement.textContent = Math.floor(currentNumber);
            if (currentNumber < targetNumber) {
                requestAnimationFrame(updateCounter); //當未達目標數字時再次呼叫更新函示，如此就形成一個迴圈的效果。
            }
        } else { // 遞減
            currentNumber -= Math.abs(increment);
            // console.log(currentNumber);
            if (currentNumber < 0) {
                currentNumber = 0
            }
            counterElement.textContent = Math.floor(currentNumber);
            if (currentNumber > targetNumber) {
                requestAnimationFrame(updateCounter);
            }
        }

    };
    updateCounter();
}
// numberAnimation(0, 1000, 'counter');
// numberAnimation(1000, 0, 'counter2');