import { Modal, Collapse } from "bootstrap";

export const bsModal = (id) => new Modal(document.getElementById(id));
export const bsCollapse = (id) => new Collapse(document.getElementById(id), { toggle: false });
