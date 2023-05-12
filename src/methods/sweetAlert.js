import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const deleteProductAlert = async (productName) => {
  const result = await Swal.fire({
    title: `是否要刪除${productName}`,
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "取消",
    confirmButtonText: "確認刪除",
    buttonsStyling: false,
    customClass: {
      title: "fs-4 fw-bold mb-3",
      cancelButton: "btn btn-secondary px-3",
      confirmButton: "btn btn-danger px-3 me-3",
      target: "rounded-3",
    },
  });

  return result.isConfirmed;
};
