
import { ModalRegistry } from "../models/enum/modalNameRegistry";
import { makeObservable, observable, computed, action } from "mobx"

class ModalService {
    modals: Partial<ModalRegistry>;
    constructor() {
        makeObservable(this, {
            modals: observable,
            showModal: action,
            closeModal: action,

        })
        this.modals = {};
    }

    isOpen(modalName: keyof ModalRegistry) {
        return modalName in this.modals;
    }

    showModal(modalName: keyof ModalRegistry, modalProps: Omit<ModalRegistry, keyof ModalRegistry>) {
        this.modals = { ...this.modals, [modalName]: modalProps }
        this.isOpen(modalName)

    }

    closeModal(modalName: keyof ModalRegistry) {
        this.isOpen(modalName);
        delete this.modals[modalName];

    }
}

export default new ModalService();                                                                                                       