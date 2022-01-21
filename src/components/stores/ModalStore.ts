
import { ModalRegistry } from "../../models/enum/modalNameRegistry";
import { makeObservable, observable, action } from "mobx"
import TaskStore from "./TaskStore";
import CategoryStore from "./CategoryStore";

class ModalStore {
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
        TaskStore.task.name = "";
        TaskStore.task.description = "";
        TaskStore.task.categoryId = "";
        CategoryStore.category.name = "";
        CategoryStore.category.description = "";

    }
}

export default new ModalStore();                                                                                                       