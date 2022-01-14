import { ModalRegistry } from "./enum/modalNameRegistry";

export interface IModalProps {
    onCloseModal: (modalName: keyof ModalRegistry) => void;
    onSubmitClick: () => void;
    submitButtonValue: string;
    closeButtonValue: string;
    titleValue: string;
    content: any;
    styles?: any;
}