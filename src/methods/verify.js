// 驗證圖片是否可顯示
const isAvailableImage = (url) => {
    return new Promise((resolve, reject) => {
        // 驗證該圖片可否在畫面上顯示
        const img = new Image();
        img.src = url;
        img.onload = () => {
            resolve();
        };
        img.onerror = () => {
            reject();
        };
    });
}