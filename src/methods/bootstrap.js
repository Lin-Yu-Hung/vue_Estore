import { Modal, Collapse, Offcanvas } from "bootstrap";

export const bsModal = (id) => new Modal(document.getElementById(id));
export const bsCollapse = (id) => new Collapse(document.getElementById(id), { toggle: false });
export const bsOffcanvas = (id) => new Offcanvas(document.getElementById(id));


export const hideOffcanvas = (id) => {
    if (window.innerWidth < 992) {
        bsOffcanvas(id).hide();
        const offcanvasElement = document.getElementById(id);
        const offcanvasBackdrop = document.querySelector(
            ".offcanvas-backdrop"
        );
        if (offcanvasElement && offcanvasBackdrop) {
            offcanvasBackdrop.remove();
            offcanvasElement.classList.remove("show");
            document.body.removeAttribute("data-bs-overflow");
            document.body.removeAttribute("data-bs-padding-right");
            document.body.style = "";
        }
    }
}

export const hideModal = (id) => {
    const modalEl = document.getElementById(id);
    const modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalEl && modalBackdrop) {
        modalEl.classList.remove("show");
        modalEl.setAttribute("aria-hidden", "true");
        modalEl.style.display = "none";
        document.body.classList.remove("modal-open");
        modalBackdrop.remove();
    }
}