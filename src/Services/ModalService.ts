
import { ModalRegistry } from "../models/enum/modalNameRegistry";


class ModalService {
    modals: Partial<ModalRegistry>;
    constructor() {
        this.modals = {};
    }

    isOpen(modalName: keyof ModalRegistry) {
        return !!this.modals[modalName]
    }

    showModal(modalName: keyof ModalRegistry, modalProps: Omit<ModalRegistry, keyof ModalRegistry>) {
        this.modals = { ...this.modals, [modalName]: modalProps }
    }

    closeModal(modalName: keyof ModalRegistry) {
        delete this.modals[modalName];
    }
}

export default new ModalService();