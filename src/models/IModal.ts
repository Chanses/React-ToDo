import { ModalRegistry } from "./enum/modalNameRegistry";
import { modalNamesEnum } from "./enum/modalNames";

export interface IModal {
    children: any;
    title: string;
    modalName: keyof ModalRegistry;
    submitButtonTitle: string;
    isModalOpen?: boolean;
    closeButtonTitle: string;
    onSubmitClick: (value?: any) => void;
}