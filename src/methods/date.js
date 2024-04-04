export const getUnixTimestamp = (date) => {
    const milliseconds = date.getTime();
    return Math.floor(milliseconds / 1000);
};

export const timestampToYMD = (timestamp) => {
    const date = new Date(timestamp * 1000); // 將秒數轉換為毫秒
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份從 0 開始，因此要加 1，並確保兩位數格式
    const day = String(date.getDate()).padStart(2, '0'); // 確保兩位數格式
    return `${year}-${month}-${day}`;
}