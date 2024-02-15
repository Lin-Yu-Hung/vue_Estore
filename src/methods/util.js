export const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // 讀取完成後
            resolve(reader);
        };
        reader.onerror = () => {
            // 讀取完成後
            reject();
        };
    })
}