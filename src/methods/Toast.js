import { toast } from "vue3-toastify";

// const customAnimation = {
//     // 客製化
//     enter: "animate__animated animate__lightSpeedInRight",
//     exit: "animate__animated animate__lightSpeedOutRight",
//     // appendPosition: true,
// };

export const successToast = (msg) => {
    toast.success(msg, {
        // transition: customAnimation,
        transition: toast.TRANSITIONS.BOUNCE,
        limit: 5,
        autoClose: 1000,
        ...(window.innerWidth > 768 && { position: toast.POSITION.BOTTOM_RIGHT }),
    })
};
