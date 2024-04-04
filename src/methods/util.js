import { login_api } from "@/api/api";
import { setCookie } from "@/methods/cookie.js"

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
            reject(null);
        };
    })
}
const isClickableMap = {};
export const toggleStatus = (event) => {
    const controls = event.target.getAttribute("aria-controls");
    if (isClickableMap[controls] === undefined) {
        isClickableMap[controls] = true;
    }
    if (isClickableMap[controls]) {
        //isClickableMap[controls]為true時才可以修改下拉選單狀態
        event.target.classList.toggle("show");
    }
    isClickableMap[controls] = false;
    setTimeout(() => {
        // 等待動畫完成再讓下拉選單變回可修改狀態
        isClickableMap[controls] = true;
    }, 350); // bootstrap 預設動畫時間為0.35秒
};

// 自動登入
export const automaticLogin = () => {
    return new Promise(async (resolve, reject) => {
        const data = {
            username: import.meta.env.VITE_username,
            password: import.meta.env.VITE_password,
        }
        const res = await login_api(data)
        setCookie("token", res.data.token);
        resolve()
    })
}
